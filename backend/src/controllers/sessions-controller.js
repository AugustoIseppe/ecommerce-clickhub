import sql from '../db.js';
import { randomUUID } from 'node:crypto'; //? -> Importa a função randomUUID da biblioteca crypto do Node.js para gerar um id único para os vídeos

//tabela de sessoes:
// - id
// - expires_at
// - user_id

export const createSession = async (req, res) => {
    try {
        const { user_id } = req.body;
        const expires_at = new Date();
        expires_at.setHours(expires_at.getHours() + 6); // Expira em 6 hora

        const result = await sql`
            INSERT INTO sessions
                (id, expires_at, user_id)
            VALUES
                (${randomUUID()}, ${expires_at}, ${user_id})
            RETURNING *;
        `;

        console.log("Session created successfully:", result[0]);
        res.status(201).json(result[0]);
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ message: "Database connection failed." });
    }
}