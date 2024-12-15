import { Product } from "@/app/types/Product";
import { SEARCH_ENDPOINTS } from "./endpoints";

export const searchService = {
    
    searchProducts: async function searchProducts(query: string): Promise<Product[]> {
      const response = await fetch(`${SEARCH_ENDPOINTS.searchProducts}?query=${query}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return response.json();
    }
  };