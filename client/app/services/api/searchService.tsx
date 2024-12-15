import { Product } from "@/app/types/Product";
import { SEARCH_ENDPOINTS } from "./endpoints";

export const searchService = {
    
    searchProducts: async function searchProducts({ query, brand }: { query: string, brand: string }): Promise<Product[]> {
      const queryParams = new URLSearchParams();
      if (query.trim() !== "") {
        queryParams.append("query", query);
      }
      if (brand.trim() !== "") {
        queryParams.append("brand", brand);
      }

      const response = await fetch(`${SEARCH_ENDPOINTS.searchProducts}?${queryParams.toString()}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return response.json();
    }
  };