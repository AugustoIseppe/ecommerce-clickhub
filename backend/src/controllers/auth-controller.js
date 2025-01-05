// import sql from '../db.js';

// export const auth = async (req, res) => {
//     try {

//         const { email, password } = req.body;

//         const user = await sql`SELECT * FROM users WHERE email = ${email} AND password = ${password} `;

//         if (user.length === 0) {
//             res.status(401).json({ message: 'Usuário ou senha inválidos' });
//         }

//         return res.status(200).json(user[0]);
//         // return res.status(200).json({ message: 'Usuário logado com sucesso' });
//     } catch (error) {

//         console.error('Erro ao logar usuário:', error);

//         return res.status(500).json({ message: 'Erro ao logar usuário' });
//     }

// }

import sql from '../db.js';
import bcrypt from 'bcrypt'; // Para hash e verificação de senhas
import jwt from 'jsonwebtoken'; // Para geração de tokens JWT
import dotenv from 'dotenv';
dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET;

export const auth = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verifica se o usuário existe no banco de dados
        const userResult = await sql`SELECT * FROM users WHERE email = ${email}`;
        if (userResult.length === 0) {
            return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }

        const user = userResult[0];

        // Verifica se a senha está correta
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }

        // Gera o token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({
            message: 'Usuário logado com sucesso',
            token,
            user: { id: user.id, email: user.email, name: user.name, phone: user.phone, cpf: user.cpf, profile_picture: user.profile_picture }
        });
    } catch (error) {
        console.error('Erro ao logar usuário:', error);
        return res.status(500).json({ message: 'Erro ao logar usuário' });
    }
};
