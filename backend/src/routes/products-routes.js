import express from 'express';
import { getProducts, createProduct, createImageProduct, deleteProduct, updateProduct, getProductById, getProductWithImages, getProductWithImagesById } from '../controllers/products-controller.js';
import { upload } from '../multer-config-product.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:product_id', getProductById);
router.post('/products', createProduct);
router.get('/products-images', getProductWithImages);
router.get('/products-images/:product_id', getProductWithImagesById);
router.post('/products-images', upload.single("image_url"), createImageProduct);
router.delete('/products/:product_id', deleteProduct);
router.put('/products/:product_id', updateProduct);

export default router;