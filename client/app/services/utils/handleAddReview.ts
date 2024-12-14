import { Review } from "@/app/types/Review";
import { reviewService } from "../api/reviewService";


export const handleAddReview = async (review: Review, navigation: any) => {
    if (!review.comment) {
        alert('Please enter a comment');
        return;
    }
    try {
        const response = await reviewService.addReview(review);
        if (response && response.success) { 
            alert('Review added successfully');
            navigation.goBack();
        }
        
        return response;
    } catch (error) {
        console.error('Error adding review', error);
        throw error;
    }
}