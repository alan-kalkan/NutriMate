import { getToken } from '../utils/getToken';
import { REVIEW_ENDPOINTS } from './endpoints';
import { Review } from '@/app/types/Review';

export const reviewService = {
    
  getReviewsByProduct: async function getReviewsByProduct(productId: string): Promise<Review[]> {
    const response = await fetch(`${REVIEW_ENDPOINTS.reviewsByProduct}/${productId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return response.json();
  },

  getAllReviews: async function getAllReviews(): Promise<Review[]> {
    const response = await fetch(REVIEW_ENDPOINTS.getAllReviews);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return response.json();
  },

  addReview: async function addReview(review: Review) {
    const token = await getToken();
    
    const response = await fetch(REVIEW_ENDPOINTS.addReview, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Failed to add review: ${response.status} - ${errorMessage}`);
      throw new Error(`Failed to add review: ${response.status}`);
    } else if (response.ok) {
      return { success: true, message: 'Review added successfully' };
    }
  },

  getReviewsByUser: async function getReviewsByUser(userId: string): Promise<Review[]> {
    const response = await fetch(`${REVIEW_ENDPOINTS.reviewsByUser}/${userId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return response.json();
  },

  deleteReviewById: async function deleteReviewById(reviewId: string) {
    const token = await getToken();
    const response = await fetch(`${REVIEW_ENDPOINTS.deleteReviewById}/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to delete review');
    }
    return response.json();
  }
};
