export interface Review {
  id: string;
  rating: number;
  comment: string;
  created_at: Date;
  user: {
    name: string;
    last_name: string;
  };
  product_id: string;
}
