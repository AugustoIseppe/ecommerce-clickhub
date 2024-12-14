import sql from '../db.js';
import { randomUUID } from 'crypto';

export const getProducts = async (req, res) => {
    try {
        const products = await sql`SELECT * FROM products order by name`;
        console.log('Products fetched successfully:' + products);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { product_id } = req.params;
        console.log("Request Params:", req.params);
        const product = await sql`
            SELECT * FROM products WHERE product_id = ${product_id}
        `;
        if (product.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        console.log('Product fetched successfully:' + product);
        res.status(200).json(product[0]);
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

export const getProductWithImages = async (req, res) => {
    try {
        const products = await sql`
            SELECT 
                p.product_id,
                p.name,
                p.description,
                p.price,
                p.stock,
                pi.product_image_id,
                pi.image_url,
                pi.is_main,
                pi.created_at AS image_created_at
            FROM 
                products p
            LEFT JOIN 
                product_images pi
            ON 
                p.product_id = pi.product_id
            ORDER BY 
                p.product_id, pi.is_main DESC;
        `;

        // Transformar os dados para agrupar as imagens em um array
        const groupedProducts = products.reduce((acc, product) => {
            const existingProduct = acc.find(p => p.product_id === product.product_id);

            if (existingProduct) {
                // Adicionar a imagem ao array de imagens do produto existente
                if (product.product_image_id) {
                    existingProduct.images.push({
                        product_image_id: product.product_image_id,
                        image_url: product.image_url,
                        is_main: product.is_main,
                        image_created_at: product.image_created_at,
                    });
                }
            } else {
                // Criar um novo produto com suas imagens
                acc.push({
                    product_id: product.product_id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    stock: product.stock,
                    images: product.product_image_id
                        ? [{
                            product_image_id: product.product_image_id,
                            image_url: product.image_url,
                            is_main: product.is_main,
                            image_created_at: product.image_created_at,
                        }]
                        : [], // Caso não tenha imagens, array vazio
                });
            }

            return acc;
        }, []);

        console.log('Products fetched successfully:', groupedProducts);
        res.status(200).json(groupedProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: error.message });
    }
};
