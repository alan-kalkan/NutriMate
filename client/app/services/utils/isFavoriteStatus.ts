import { favoriteService } from "../api/favoriteService";

export const isFavoriteStatus = async (productId: string, userId: string) => {
  const favorites = await favoriteService.getFavorites(userId);
  return favorites.includes(productId);
};