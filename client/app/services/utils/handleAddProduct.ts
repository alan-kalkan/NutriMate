import { Product } from "@/app/types/Product";
import { productService } from "../api/productService";

export const handleAddProduct = async (product: Product) => {
    try {
        const response = await productService.submitProduct(product);
        return response;
    } catch (error) {
        console.error(error);
    }
}