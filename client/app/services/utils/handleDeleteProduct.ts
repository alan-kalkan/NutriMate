import { productService } from '../api/productService';

export const handleDeleteProduct = async (productId: string) => {
    try {
        const response = await productService.deleteProduct(productId);
        if (!response) {
            throw new Error('No response from server');
        }
        if (response.status !== 200) {
            throw new Error(response.statusText || 'Failed to delete product');
        }
        alert('Product deleted successfully');
        return true;
    } catch (error) {
        console.error('Error deleting product:', error);
        return false;
    }
}