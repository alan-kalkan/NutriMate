import express from 'express';
import { addFavorite, deleteFavorite, getFavorites, getFavoritesByProductId } from '../../controllers/favorites/favoritesController';

const router = express.Router();

router.post('/addFavorite/:userId/:productId', addFavorite);

router.get('/getFavoritesByProductId/:userId/:productId', getFavoritesByProductId);

router.get('/getFavorites/:userId', getFavorites);

router.delete('/deleteFavorite/:userId/:productId', deleteFavorite);

export default router;