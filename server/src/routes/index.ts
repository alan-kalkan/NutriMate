import { Router } from 'express';
import usersRoutes from './users/usersRoutes';
import categoriesRoutes from './categories/categoriesRoutes';
import productsRoutes from './products/productsRoutes';
import brandsRoutes from './brands/brandsRoutes';
import reviewsRoutes from './reviews/reviewsRoutes';
import favoritesRoutes from './favorites/favoritesRoutes';
import searchProductsRoutes from './searchProducts/searchProductsRoutes';

const router = Router();

router.use('/user', usersRoutes);

router.use('/category', categoriesRoutes);

router.use('/product', productsRoutes);

router.use('/brand', brandsRoutes);

router.use('/review', reviewsRoutes);

router.use('/favorite', favoritesRoutes);

router.use('/search', searchProductsRoutes);

export default router;
