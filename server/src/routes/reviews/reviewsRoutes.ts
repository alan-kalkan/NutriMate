import express from 'express';
import { addReview, deleteReview, getReviewsByProduct, getReviewsByUser, updateReview } from '../../controllers/reviews/reviewsController';

const router = express.Router();

router.post('/addReview', addReview);

router.get('/getReviewsByProduct/:product_id', getReviewsByProduct);

router.get('/getReviewsByUser/:user_id', getReviewsByUser);

router.put('/updateReview/:id', updateReview);

router.delete('/deleteReviewById/:id', deleteReview);
    
export default router;