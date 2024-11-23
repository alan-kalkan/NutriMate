import { reviewService } from '../api/reviewService';
import { Review } from '../../types/Review';

export const fetchReviews = async (productId: string): Promise<number> => {
  try {
    const reviews = await reviewService.getReviewsByProduct(productId);
    console.log('reviews', JSON.stringify(reviews, null, 2));
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length ? totalRating / reviews.length : 0;
    console.log('averageRating', averageRating);
    return averageRating;
  } catch {
    throw new Error("Failed to fetch reviews");
  }
};