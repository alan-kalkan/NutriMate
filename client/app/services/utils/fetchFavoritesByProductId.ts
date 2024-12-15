import { favoriteService } from "../api/favoriteService";

export const fetchFavoritesByProductId = async (userId: string, productId: string) => {
    try {
        const response = await favoriteService.getFavoritesByProductId(userId, productId);
        console.log('fetchFavoritesByProductId response', response);
        return response;
    } catch (error) {
        console.error('Erreur lors de la récupération des favoris par produit:', error);
    }
}