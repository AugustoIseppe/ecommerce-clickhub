import express from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct, getProductById, getProductWithImages, getProductWithImagesById } from '../controllers/products-controller.js';
import { upload } from '../multer-config-product.js';

const router = express.Router();

// router.post('/products-images', upload.single("image_url"), createImageProduct);
// Rota para upload de múltiplas imagens
router.get('/products', getProducts);
router.get('/products/:product_id', getProductById);
// Rota para criar um novo produto com imagens
router.get('/products-images', getProductWithImages);
router.get('/products-images/:product_id', getProductWithImagesById);
// router.post('/products', upload.array("images", 3), createProduct);
router.post('/products', upload.single("image1"), createProduct);
router.delete('/products/:product_id', deleteProduct);
router.put('/products/:product_id', updateProduct);

export default router;