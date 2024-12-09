import sql from '../db.js';
import { randomUUID } from 'crypto';

export const getProducts = async (req, res) => {
    try {
        const products = await sql`SELECT * FROM products`;
        console.log('Products fetched successfully:' + products);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

export const createProduct = async (req, res) => {
    const uuid = randomUUID(); // Generates a unique id for the user
    console.log("Generated UUID:", uuid);
    try {
        const { name, description, price, stock, category_id } = req.body;
        console.log("Request Body:", req.body);
        const product = await sql`
            INSERT INTO products
                (product_id, name, description, price, stock, category_id)
            VALUES
                (${uuid}, ${name}, ${description}, ${price}, ${stock}, ${category_id}) 
            RETURNING *
        `;
        console.log('Product created successfully:' + product);
        res.status(200).json(product[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}