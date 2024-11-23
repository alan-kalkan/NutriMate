import { Review } from "./Review";

export interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    image_url?: string;
    treatmentDuration?: number;
    brand_id: string;
    brand: {
      name: string;
    };
    category_id: string;
    reviews?: Review[];
    averageRating?: number;
  }