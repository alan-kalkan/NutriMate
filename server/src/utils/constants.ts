import { Decimal } from '@prisma/client/runtime/library';

export const mockProducts = [
  {
      id: '1',
      name: 'Product 1',
      description: null,
      treatmentDuration: null,
      price: new Decimal(100),
      image_url: null,
      averageRating: null,
      created_at: new Date(),
      brand_id: null
  },
  {
      id: '2',
      name: 'Product 2',
      description: null,
      treatmentDuration: null,
      price: new Decimal(200),
      image_url: null,
      averageRating: null,
      created_at: new Date(),
      brand_id: null
  }
];
export const mockFavorites = [
  {
      id: '1',
      created_at: new Date(),
      user_id: '1',
      product_id: '1'
  },
  {
      id: '2',
      created_at: new Date(),
      user_id: '1',
      product_id: '2'
  },
  {
      id: '3',
      created_at: new Date(),
      user_id: '2',
      product_id: '1'
  }
];

export const mockUsers = [
  {
    id: '1',
    email: 'user1@example.com',
    password: 'password1',
    created_at: new Date(),
    updated_at: new Date(),
    name: 'User 1',
    last_name: 'Last Name 1',
    gender: 'male',
  },
];