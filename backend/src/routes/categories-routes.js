import express from 'express';
import { getCategories, createCategory, deleteCategory } from '../controllers/categories-controller.js';

const router = express.Router();

router.get('/categories', getCategories);
router.post('/categories', createCategory);
router.delete('/categories/:category_id', deleteCategory);


export default router;