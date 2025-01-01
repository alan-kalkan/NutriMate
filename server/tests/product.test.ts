import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { beforeEach, jest, describe, it, expect } from '@jest/globals';
import { getProducts } from '../src/controllers/products/productsController';

type MockProduct = {
  id: string;
  name: string;
  description: string | null;
  treatmentDuration: number | null;
  price: number;
  image_url: string | null;
  averageRating: number | null;
  created_at: Date;
  brand_id: string | null;
  brand: { name: string };
  reviews: any[];
};

jest.mock('@prisma/client', () => {
  const mockPrisma = {
    product: {
      findMany: jest.fn().mockResolvedValue([])
    }
  };
  return { PrismaClient: jest.fn(() => mockPrisma) };
});

describe('getProducts', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response> & {
    json: jest.Mock;
    status: jest.Mock;
  };
  let prisma: PrismaClient;

  beforeEach(() => {
    // Reset mocks before each test
    mockReq = {};
    mockRes = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
    } as any;
    prisma = new PrismaClient();
  });

  it('should return all products successfully', async () => {
    // Mock data
    const mockProducts: MockProduct[] = [
      {
        id: '1',
        name: 'Test Product 1',
        description: 'Description 1',
        price: 100,
        brand: { name: 'Brand 1' },
        reviews: [],
        treatmentDuration: 30,
        image_url: 'test.jpg',
        averageRating: 4.5,
        created_at: new Date(),
        brand_id: 'brand1',
      },
      {
        id: '2',
        name: 'Test Product 2',
        description: 'Description 2',
        price: 200,
        brand: { name: 'Brand 2' },
        reviews: [],
        treatmentDuration: 45,
        image_url: 'test2.jpg',
        averageRating: 4.0,
        created_at: new Date(),
        brand_id: 'brand2',
      },
    ];

    // Setup the mock implementation
    (prisma.product.findMany as jest.Mock).mockResolvedValue(mockProducts);

    // Execute the function
    await getProducts(mockReq as Request, mockRes as Response);

    // Assertions
    expect(prisma.product.findMany).toHaveBeenCalledWith({
      include: {
        brand: true,
        reviews: true,
      },
    });
    expect(mockRes.json).toHaveBeenCalledWith(mockProducts);
  });

  it('should handle errors and return 500 status', async () => {
    // Setup the mock to throw an error
    (prisma.product.findMany as jest.Mock).mockRejectedValue(new Error('Database error'));

    // Execute the function
    await getProducts(mockReq as Request, mockRes as Response);

    // Assertions
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Products not found' });
  });
});