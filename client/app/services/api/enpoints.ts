export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const PRODUCT_ENDPOINTS = {
  products: `${API_BASE_URL}/api/v1/product/getProducts`,
  productsById: `${API_BASE_URL}/api/v1/product/getProductById`,
  productsByName: `${API_BASE_URL}/api/v1/product/getProductByName`,
  brandProducts: `${API_BASE_URL}/api/v1/brand/getProducts`,
  brandById: `${API_BASE_URL}/api/v1/brand/getBrand`,
};

export const REVIEW_ENDPOINTS = {
  reviewsByProduct: `${API_BASE_URL}/api/v1/review/getReviewsByProduct`,
  addReview: `${API_BASE_URL}/api/v1/review/addReview`,
};

export const USER_ENDPOINTS = {
  updatePassword: `${API_BASE_URL}/api/v1/user/updatePassword`,
  updateUser: `${API_BASE_URL}/api/v1/user/updateUser`,
  userById: `${API_BASE_URL}/api/v1/user/getUserById`,
  login: `${API_BASE_URL}/api/v1/user/login`,
  register: `${API_BASE_URL}/api/v1/user/register`,
  userInformation: `${API_BASE_URL}/api/v1/user/getUserById`,
};

export const FAVORITE_ENDPOINTS = {
  addFavorite: `${API_BASE_URL}/api/v1/favorite/addFavorite`,
  getFavorites: `${API_BASE_URL}/api/v1/favorite/getFavorites`,
  getFavoritesByProductId: `${API_BASE_URL}/api/v1/favorite/getFavoritesByProductId`,
  deleteFavorite: `${API_BASE_URL}/api/v1/favorite/deleteFavorite`,
};