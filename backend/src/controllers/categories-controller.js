import sql from '../db.js';
import { randomUUID } from 'crypto';

export const getCategories = async (req, res) => {
    try {
        const categories = await sql`SELECT * FROM categories order by name`;
        console.log('Categories fetched successfully:' + categories);
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

export const createCategory = async (req, res) => {
    const { name } = req.body;
    const category_id = randomUUID();

    try {
        const newCategory = await sql`INSERT INTO categories (category_id, name) VALUES (${category_id}, ${name}) RETURNING *`;
        console.log('Category created successfully:' + newCategory);
        res.status(200).json(newCategory[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

export const deleteCategory = async (req, res) => {
    const { category_id } = req.params;

    try {
        const deletedCategory = await sql`DELETE FROM categories WHERE category_id = ${category_id} RETURNING *`;
        console.log('Category deleted successfully:' + deletedCategory);
        res.status(200).json(deletedCategory[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}