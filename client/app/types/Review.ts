export interface Review {
  id: string;
  productId: string;
  rating: number;
  comment: string;
  created_at: Date;
  user: {
    name: string;
    last_name: string;
  };
}
