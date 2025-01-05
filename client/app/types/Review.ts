export interface Review {
  rating: number;
  comment: string;
  product_id: string;
  user_id: string;
  id?: string;
  created_at?: Date;
}