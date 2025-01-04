export interface Review {
  id: string;
  rating: number;
  comment: string;
  created_at: Date;
  product_id: string;
  user_id: string;
}
