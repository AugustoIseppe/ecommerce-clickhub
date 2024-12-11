import express from 'express';
import { createOrder, getOrdersByUser } from '../controllers/orders-controller.js';

const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders/:user_id', getOrdersByUser);

export default router;
