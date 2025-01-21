import sql from '../db.js';
import { randomUUID } from 'node:crypto'; //? -> Importa a função randomUUID da biblioteca crypto do Node.js para gerar um id único para os vídeos
import bcrypt from 'bcrypt'; // Para hash e verificação de senhas

export const getUsers = async (req, res) => {
    try {
        const users = await sql`SELECT * FROM users`;
        console.log("Users fetched successfully:", users);
        res.status(200).json(users);
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ message: "Database connection failed." });
    }

}

export const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const users = await sql`SELECT * FROM users WHERE email = ${email}`;
        console.log("Users fetched successfully:", users);
        res.status(200).json(users);
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ message: "Database connection failed." });
    }
}

export const getUsersWithAddress = async (req, res) => {
    try {
        const result = await sql`
            SELECT 
                u.user_id,
                u.name,
                u.email,
                u.password,
                u.phone,
                u.cpf,
                u.profile_picture,
                u.created_at AS user_created_at,
                u.updated_at AS user_updated_at,
                a.address_id,
                a.street,
                a.city,
                a.state,
                a.zip_code,
                a.created_at AS address_created_at,
                a.updated_at AS address_updated_at
            FROM 
                users u
            LEFT JOIN 
                addresses a
            ON 
                u.user_id = a.user_id;
        `;

        // Transform the flat result into the desired nested format
        const users = result.map(row => ({
            user_id: row.user_id,
            name: row.name,
            email: row.email,
            password: row.password,
            phone: row.phone,
            cpf: row.cpf,
            profile_picture: row.profile_picture,
            created_at: row.user_created_at,
            updated_at: row.user_updated_at,
            address: row.address_id ? { // Only include address if it exists
                address_id: row.address_id,
                user_id: row.user_id,
                street: row.street,
                city: row.city,
                state: row.state,
                zip_code: row.zip_code,
                created_at: row.address_created_at,
                updated_at: row.address_updated_at
            } : null
        }));

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// export const createUser = async (req, res) => {
//     const uuid = randomUUID(); // Generates a unique id for the user
//     console.log("Generated UUID:", uuid);
//     try {
//         const { name, email, password, phone, cpf } = req.body;
//         const result = await sql`
//             INSERT INTO users 
//                 (user_id, name, email, password, phone, cpf, profile_picture) 
//             VALUES 
//                 (${uuid}, ${name}, ${email}, ${password}, ${phone}, ${cpf}, ${req.file ? req.file.filename : null})
//             RETURNING *;
//         `;
//         console.log("User created successfully:", result);
//         res.status(200).json(result[0]);
//     } catch (error) {
//         console.error("Database connection error:", error);
//         res.status(500).json({ message: "Database connection failed." });
//     }
// };

export const createUser = async (req, res) => {
    const uuid = randomUUID(); // Gera um ID único para o usuário
    console.log("Generated UUID:", uuid);

    try {
        const { name, email, password, phone, cpf } = req.body;

        // Criptografando a senha
        const saltRounds = 10; // Defina o número de salt rounds (quanto mais alto, mais seguro, mas mais lento)
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const result = await sql`
            INSERT INTO users 
                (user_id, name, email, password, phone, cpf, profile_picture) 
            VALUES 
                (${uuid}, ${name}, ${email}, ${hashedPassword}, ${phone}, ${cpf}, ${req.file ? req.file.filename : null})
            RETURNING *;
        `;

        console.log("User created successfully:", result);
        res.status(200).json(result[0]);  // Retorna o usuário criado
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ message: "Database connection failed." });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await sql`DELETE FROM users WHERE user_id = ${id}`;
        res.status(200).json({ message: `User with id ${id} deleted successfully.` });
    } catch (error) {
        console.error("Erro ao exlcuir usuário:", error);
        res.status(500).json({ message: "Erro ao excluir usuário" });
    }
}


export const updateUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { name, email, password, phone, cpf } = req.body;
        const result = await sql`
            UPDATE users
            SET name = ${name}, email = ${email}, password = ${password}, phone = ${phone}, cpf = ${cpf}
            WHERE user_id = ${user_id}
            RETURNING *;
        `;
        res.status(200).json(result[0]);
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        res.status(500).json({ message: "Erro ao atualizar usuário" });
    }
}
