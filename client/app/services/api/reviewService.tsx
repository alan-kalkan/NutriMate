import { REVIEW_ENDPOINTS } from './enpoints';
import { Review } from '@/app/types/Review';

export const reviewService = {
    
  async getReviewsByProduct(productId: string): Promise<Review[]> {
    const response = await fetch(`${REVIEW_ENDPOINTS.reviewsByProduct}/${productId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return response.json();
  },

  async addReview(review: Review): Promise<Review> {
    const response = await fetch(REVIEW_ENDPOINTS.addReview, { method: 'POST', body: JSON.stringify(review) });
    
    if (!response.ok) {
      throw new Error('Failed to add review');
    }
    return response.json();
  }
};