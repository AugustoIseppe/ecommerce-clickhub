import express from 'express';
import { getCategories, getCategoryById, createCategory, deleteCategory } from '../controllers/categories-controller.js';

const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:category_id', getCategoryById);
router.post('/categories', createCategory);
router.delete('/categories/:category_id', deleteCategory);


export default router;