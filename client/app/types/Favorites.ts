import { Product } from "./Product";

export interface Favorite {
    id: string;
    user_id: string;
    product_id: string;
    created_at: Date;
    product: Product;
}