import express from 'express';
import { getProducts, createProduct, createImageProduct, deleteProduct, updateProduct } from '../controllers/products-controller.js';
import { upload } from '../multer-config-product.js';

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.post('/products-images', upload.single("image_url"), createImageProduct);
router.delete('/products/:product_id', deleteProduct);
router.put('/products/:product_id', updateProduct);

export default router;