import { PRODUCT_ENDPOINTS } from './enpoints';
import { Product } from '@/app/types/Product';

export const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(PRODUCT_ENDPOINTS.products);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  async getProductById(productId: string): Promise<Product> {
    const response = await fetch(`${PRODUCT_ENDPOINTS.productsById}/${productId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  },

  async getProductByName(productName: string): Promise<Product> {
    const response = await fetch(`${PRODUCT_ENDPOINTS.productsByName}/${productName}`);
    
    if (!response.ok) {
      throw new Error('Failed to search product for: ' + {productName})
    }
    return response.json();
  },

  async getBrandProducts(brandId: string): Promise<Product[]> {
    const response = await fetch(`${PRODUCT_ENDPOINTS.brandById}/${brandId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch brand products');
    }
    return response.json();
  }
};
