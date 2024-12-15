import { favoriteService } from "../api/favoriteService";

export const isFavoriteStatus = async (productId: string, userId: string) => {
  console.log('isFavoriteStatus function', productId, userId);
  const favorites = await favoriteService.getFavorites(userId);
  return favorites.includes(productId);
};