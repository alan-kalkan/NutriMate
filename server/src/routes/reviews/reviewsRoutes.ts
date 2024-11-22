import express from 'express';
import { addReview, deleteReview, getReviewsByProduct, updateReview } from '../../controllers/reviews/reviewsController';

const router = express.Router();

router.post('/addReview', addReview);

router.get('/getReviewsByProduct/:product_id', getReviewsByProduct);

router.put('/updateReview/:id', updateReview);

router.delete('/deleteReview/:id', deleteReview);
    
export default router;
