// import { create } from 'domain';
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


// export const createProduct = async (req, res) => {
//     const uuid = randomUUID(); // Gera um ID único para o produto
//     console.log("Generated UUID:", uuid);

//     // Verifica se as imagens foram enviadas
//     if (!req.files || req.files.length === 0) {
//         return res.status(400).json({ message: "Nenhuma imagem foi enviada." });
//     }

//     try {
//         const { name, description, price, stock, category_id } = req.body;
//         console.log("Request Body:", req.body);

//         // Construindo as URLs das imagens
//         const imagePaths = req.files.map(file => file.filename); // Apenas o nome do arquivo
//         console.log("Imagens salvas:", imagePaths);

//         // Insere o produto com as imagens
//         const product = await sql`
//             INSERT INTO products
//                 (product_id, name, description, price, stock, category_id, image1, image2, image3)
//             VALUES
//                 (${uuid}, ${name}, ${description}, ${price}, ${stock}, ${category_id}, ${imagePaths[0] || null}, ${imagePaths[1] || null}, ${imagePaths[2] || null}) 
//             RETURNING *
//         `;
//         console.log('Produto criado com sucesso:', product);
//         res.status(200).json(product[0]);
//     } catch (error) {
//         console.log("Erro ao criar o produto:", error);
//         res.status(500).json({ message: "Erro ao criar o produto." });
//     }
// };


export const createProduct = async (req, res) => {
    const uuid = randomUUID(); // Generates a unique id for the user
    console.log("Generated UUID:", uuid);
    try {
        const { name, description, price, stock, category_id } = req.body;
        console.log("Request Body:", req.body);
        const product = await sql`
            INSERT INTO products
                (product_id, name, description, price, stock, category_id, image1)
            VALUES
                (${uuid}, ${name}, ${description}, ${price}, ${stock}, ${category_id}, ${req.file ? req.file.filename : null}) 
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
                p.created_at,
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
                    created_at: product.created_at,
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

export const getProductWithImagesById = async (req, res) => {
    try {
        const { product_id } = req.params;
        console.log("Request Params:", req.params);

        const products = await sql`
            SELECT 
                p.product_id,
                p.name,
                p.description,
                p.price,
                p.stock,
                p.created_at,
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
            WHERE 
                p.product_id = ${product_id}
            ORDER BY 
                pi.is_main DESC;
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
                    created_at: product.created_at,
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

        if (groupedProducts.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        console.log('Product fetched successfully:', groupedProducts[0]);
        res.status(200).json(groupedProducts[0]);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: error.message });
    }
}
