import { Router } from 'express';
import { searchProducts } from '../../controllers/searchProducts/searchProductsController';

const router = Router();

router.get('/', searchProducts);

export default router;