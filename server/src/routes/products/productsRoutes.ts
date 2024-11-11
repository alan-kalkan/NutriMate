import express from 'express';
import { addProduct, deleteProduct, getProducts, updateProduct } from '../../controllers/products/productsController';

const router = express.Router();

router.post('/addProduct', addProduct);

router.get('/getProducts', getProducts);

router.put('/updateProduct', updateProduct)

router.delete('/deleteProduct', deleteProduct)

export default router;
