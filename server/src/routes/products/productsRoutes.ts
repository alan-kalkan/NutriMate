import express from 'express';
import { addProduct, deleteProduct, getFavorites, getProductById, getProductByName, getProducts, updateProduct } from '../../controllers/products/productsController';

const router = express.Router();

router.post('/addProduct', addProduct);

router.get('/getProducts', getProducts);

router.get('/getProductById/:id', getProductById);

router.get('/getFavorites/:userId', getFavorites);

router.get('/getProductByName/:productName', getProductByName);

router.put('/updateProduct', updateProduct)

router.delete('/deleteProduct', deleteProduct)

export default router;
