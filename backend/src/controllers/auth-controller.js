import sql from '../db.js';

export const auth = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await sql`SELECT * FROM users WHERE email = ${email} AND password = ${password} `;

        if (user.length === 0) {
            res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }

        return res.status(200).json(user[0]);
        // return res.status(200).json({ message: 'Usuário logado com sucesso' });
    } catch (error) {

        console.error('Erro ao logar usuário:', error);

        return res.status(500).json({ message: 'Erro ao logar usuário' });
    }

}