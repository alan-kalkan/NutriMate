import express from 'express';
import { addCategory, getProductsByCategory, addProductToCategory, removeProductFromCategory, updateCategory, updateProductCategory } from '../../controllers/categories/categoriesController';

const router = express.Router();


//CREATE
router.post('/addCategory', addCategory);
router.post('/addProductToCategory', addProductToCategory);

//READ
router.get('/getProductsByCategory/:categoryId', getProductsByCategory);

//UPDATE
router.put('/updateCategory/:id', updateCategory);
router.put('/updateProductCategory/:oldProductId/:oldCategoryId', updateProductCategory);

//DELETE
router.delete('/removeProductFromCategory/:productId/:categoryId', removeProductFromCategory);
export default router;
