import sql from '../db.js'; // Conexão com o banco de dados
import { randomUUID } from 'crypto';

// Função para criar um pedido
export const createOrder = async (req, res) => {
    try {
        const { user_id, items } = req.body;

        if (!user_id || !items || items.length === 0) {
            return res.status(400).json({ message: 'User ID and items are required.' });
        }

        // Gerar o ID do pedido
        const order_id = randomUUID();

        // Calcular o preço total do pedido
        const total_price = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

        // Inserir o pedido na tabela `orders`
        await sql`
            INSERT INTO orders (order_id, user_id, total_price, status, created_at, updated_at)
            VALUES (${order_id}, ${user_id}, ${total_price}, 'pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        `;

        // Inserir os itens na tabela `order_items`
        for (const item of items) {
            const order_item_id = randomUUID();
            await sql`
                INSERT INTO order_items (order_item_id, order_id, product_id, quantity, price, created_at, updated_at)
                VALUES (${order_item_id}, ${order_id}, ${item.product_id}, ${item.quantity}, ${item.price}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            `;
        }

        res.status(201).json({ message: 'Order created successfully!', order_id });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

// Função para buscar pedidos e itens por usuário
export const getOrdersByUser = async (req, res) => {
    try {
        const { user_id } = req.params;

        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required.' });
        }

        // Consulta para buscar os pedidos e itens do usuário
        const orders = await sql`
            SELECT 
                o.order_id,
                o.total_price,
                o.status,
                o.created_at,
                oi.order_item_id,
                oi.product_id,
                oi.quantity,
                oi.price
            FROM 
                orders o
            JOIN 
                order_items oi
            ON 
                o.order_id = oi.order_id
            WHERE 
                o.user_id = ${user_id}
        `;

        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user.' });
        }

        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

