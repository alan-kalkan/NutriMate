import { FAVORITE_ENDPOINTS } from "./endpoints";

export const favoriteService = {
    async addFavorite(userId: string, productId: string) {
        console.log('addFavorite', userId, productId);
        const response = await fetch(`${FAVORITE_ENDPOINTS.addFavorite}/${userId}/${productId}`, {
            method: 'POST',
        });
        console.log('addFavorite response', response);
        if (!response.ok) {
            throw new Error('Failed to add favorite');
        }
        return response.json();
    },

    async getFavorites(userId: string) {
        const response = await fetch(`${FAVORITE_ENDPOINTS.getFavorites}/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch favorites');
        }
        return response.json();
    },

    async getFavoritesByProductId(userId: string, productId: string) {
        const response = await fetch(`${FAVORITE_ENDPOINTS.getFavoritesByProductId}/${userId}/${productId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch favorites by product id');
        }
        return response.json();
    },

    async deleteFavorite(userId: string, productId: string) {
        const response = await fetch(`${FAVORITE_ENDPOINTS.deleteFavorite}/${userId}/${productId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete favorite');
        }
        return response.json();
    }
}