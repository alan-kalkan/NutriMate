export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const ENDPOINTS = {
  products: `${API_BASE_URL}/api/v1/product/getProducts`,
  productsById: `${API_BASE_URL}/api/v1/product/getProductById`,
  productsByName: `${API_BASE_URL}/api/v1/product/getProductByName`
};