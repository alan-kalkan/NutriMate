import express from 'express';
import { addBrand, deleteBrand, getProductsByBrand, updateBrand, getBrandById } from '../../controllers/brands/brandsController';

const router = express.Router();

router.post('/addBrand', addBrand);

router.get('/getProducts/:brandId', getProductsByBrand);

router.get('/getBrand/:brandId', getBrandById);

router.put('/updateBrand', updateBrand);

router.delete('/deleteBrand', deleteBrand);

export default router;
