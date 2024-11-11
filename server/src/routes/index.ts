import { Router } from 'express';
import usersRoutes from './users/usersRoutes';
import categoriesRoutes from './categories/categoriesRoutes';
import productsRoutes from './products/productsRoutes';
import brandsRoutes from './brands/brandsRoutes';

const router = Router();

router.use('/user', usersRoutes);

router.use('/category', categoriesRoutes);

router.use('/product', productsRoutes);

router.use('/brand', brandsRoutes);

export default router;
