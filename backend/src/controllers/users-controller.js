import sql from '../db.js';

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