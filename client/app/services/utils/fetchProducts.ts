import { Product } from "@/app/types/Product";
import { productService } from "../api/productService";
import { reviewService } from "../api/reviewService";
import { Review } from "@/app/types/Review";

export const fetchProducts = async (
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    try {
      const data = await productService.getProducts();
      setProducts(data);
    } catch (err) {
      setError(err as string);
      return [];
    } finally {
        setIsLoading(false);
    }
};

export const fetchProductById = async (
    productId: string,
    setProduct: React.Dispatch<React.SetStateAction<Product | null>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const data = await productService.getProductById(productId);
      setProduct(data);
    } catch (error) {
      console.error('Erreur lors de la récupération du produit:', error);
    } finally {
      setIsLoading(false);
    }
  };    

export const fetchProductReviews = async (productId: string): Promise<Review[]> => {
    try {
      const data = await reviewService.getReviewsByProduct(productId);
      return data;
    } catch {
      throw new Error("Failed to fetch reviews");
    }
  };
