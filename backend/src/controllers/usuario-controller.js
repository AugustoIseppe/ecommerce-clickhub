import sql from '../db.js';
import { randomUUID } from 'node:crypto'; //? -> Importa a função randomUUID da biblioteca crypto do Node.js para gerar um id único para os vídeos 

//inserir no db apenas nome e email
export const createUsuario = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await sql`INSERT INTO usuario (id, name, email) VALUES (${randomUUID()}, ${name}, ${email}) RETURNING *`;
        console.log("Usuário criado com sucesso:", user);
        //ao inves de retornar uma lista de usuarios, retorna apenas o usuario criado
        //retornar uma mesangem de sucesso
        res.status(201).json(user[0]);
    } catch (error) {
        console.error("Erro de conexao com o banco de dados:", error);
        res.status(500).json({ message: "Não foi possível criar um usuário." });
    }
}

//listar todos os usuarios
export const listUsuarios = async (req, res) => {
    try {
        const usuarios = await sql`SELECT * FROM usuario`;
        console.log("Lista de usuários:", usuarios);
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Erro de conexao com o banco de dados:", error);
        res.status(500).json({ message: "Não foi possível listar os usuários." });
    }
}