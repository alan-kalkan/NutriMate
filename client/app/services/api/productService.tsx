import { Favorite } from '@/app/types/Favorites';
import { PRODUCT_ENDPOINTS } from './endpoints';
import { Product } from '@/app/types/Product';
import { getToken } from '../utils/token';

export const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(PRODUCT_ENDPOINTS.products);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  async deleteProduct(productId: string): Promise<Response> {
    const token = await getToken();
    const response = await fetch(`${PRODUCT_ENDPOINTS.deleteProduct}/${productId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: productId }),
    });
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
    return response;
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
  },

  async getFavorites(userId: string): Promise<Favorite[]> {
    const response = await fetch(`${PRODUCT_ENDPOINTS.favorites}/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch favorites for user: ' + userId);
    }
    return response.json();
  },
  
  async submitProduct(product: Product): Promise<Product> {
    const token = await getToken();
    const response = await fetch(PRODUCT_ENDPOINTS.submitProduct, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('Failed to submit product');
    }
    return response.json();
  }
};