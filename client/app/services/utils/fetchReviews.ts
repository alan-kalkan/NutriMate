import { Review } from '@/app/types/Review';
import { reviewService } from '../api/reviewService';

export const fetchReviews = async (productId: string): Promise<number> => {
  try {
    const reviews = await reviewService.getReviewsByProduct(productId);
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length ? totalRating / reviews.length : 0;
    return averageRating;
  } catch {
    throw new Error("Failed to fetch reviews");
  }
};

export const fetchReviewsByUser = async (userId: string): Promise<Review[]> => {
  try {
    const reviews = await reviewService.getReviewsByUser(userId);
    return reviews;
  } catch {
    throw new Error("Failed to fetch reviews");
  }
};

export const fetchAllReviews = async (): Promise<Review[]> => {
  try {
    const reviews = await reviewService.getAllReviews();
    return reviews;
  } catch {
    throw new Error("Failed to fetch reviews");
  }
};