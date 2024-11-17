import { ENDPOINTS } from './enpoints';
import { Product } from '@/app/types/Product';

export const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(ENDPOINTS.products);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },
  async getProductById(productId: string): Promise<Product> {
    const response = await fetch(`${ENDPOINTS.products}/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  }
};
