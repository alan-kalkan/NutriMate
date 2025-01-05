import { Review } from "@/app/types/Review";
import { reviewService } from "../api/reviewService";


export const handleAddReview = async (review: Review, navigation: () => void) => {
    if (!review.comment) {
        alert('Please enter a comment');
        return;
    }
    if (review.rating === 0) {
        alert('You cannot rate 0');
        return;
    }
    try {
        const response = await reviewService.addReview(review);
        if (response && response.success) { 
            alert('Review added successfully');
            navigation();
        }
        
        return response;
    } catch (error) {
        alert('You cannot add a review for this product, you might have already reviewed it!');
        console.error('Error adding review', error);
        throw error;
    }
}