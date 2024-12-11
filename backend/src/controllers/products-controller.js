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

export const createImageProduct = async (req, res) => {
    const uuid = randomUUID(); // Generates a unique id for the user
    console.log("Generated UUID:", uuid);

    try {
        const { product_id, is_main } = req.body;
        console.log("Request Body:", req.body);

        // Validação
        if (!product_id || typeof is_main === 'undefined') {
            return res.status(400).json({
                message: "Campos obrigatórios: 'product_id' e 'is_main' devem ser fornecidos.",
            });
        }

        // Inserção no banco de dados
        const product = await sql`
            INSERT INTO product_images
                (product_image_id, product_id, image_url, is_main)
            VALUES
                (${uuid}, ${product_id}, ${req.file ? req.file.filename : null}, ${is_main})
            RETURNING *
        `;
        console.log('Product image created successfully:', product);
        res.status(200).json(product[0]);
    } catch (error) {
        console.log("Erro ao criar imagem do produto:", error);
        res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { product_id } = req.params;
        console.log("Request Params:", req.params);

        if (!product_id) {
            return res.status(400).json({ message: 'Product ID is required' });
        }
        console.log("Product ID:", product_id);

        const product = await sql`
            DELETE FROM products
            WHERE product_id = ${product_id}
            RETURNING *
        `;
        if (product.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        console.log('Product deleted successfully:', product);
        res.status(200).json(product[0]);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { product_id } = req.params;
        const { name, description, price, stock, category_id } = req.body;
        console.log("Request Body:", req.body);

        if (!product_id) {
            return res.status(400).json({ message: 'Product ID is required' });
        }
        console.log("Product ID:", product_id);

        const product = await sql`
            UPDATE products
            SET name = ${name}, description = ${description}, price = ${price}, stock = ${stock}, category_id = ${category_id}
            WHERE product_id = ${product_id}
            RETURNING *
        `;
        console.log('Product updated successfully:', product);
        res.status(200).json(product[0]);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}