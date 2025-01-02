import { reviewService } from "../api/reviewService";

export const handleDeleteReview = async (reviewId: string) => {
    try {
        const response = await reviewService.deleteReviewById(reviewId);
        if (!response) {
            throw new Error('No response from server');
        }
        if (!response.success) {
            throw new Error(response.message || 'Failed to delete review');
        }
        alert('Review deleted successfully');
        return true;
    } catch (error) {
        console.error('Error deleting review:', error);
        return false;
    }
}