import { Request, Response } from 'express';
import { addProduct, getProducts } from '../src/controllers/products/productsController';
import { PrismaClient, Product } from '@prisma/client';
import { jest } from '@jest/globals';
import { describe, it, beforeEach, expect } from '@jest/globals';
import { Decimal } from '@prisma/client/runtime/library';
import { Mock } from 'jest';
// Mock PrismaClient
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    product: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  })),
}));

const prisma = new PrismaClient();

describe('Product Controller', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  // Test for addProduct
  it('should create a product successfully', async () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Product',
      description: 'A test product',
      price: new Decimal(100),
      brand_id: 'brand-id',
      image_url: 'http://example.com/image.png',
      treatmentDuration: 30,
      created_at: new Date(),
      averageRating: 4.5,
    };
  
    (prisma.product.create as jest.Mock).mockResolvedValue(mockProduct);
  
    mockReq.body = {
      name: 'Test Product',
      description: 'A test product',
      price: 100,
      brand_id: 'brand-id',
      image_url: 'http://example.com/image.png',
      treatmentDuration: 30,
    };
  
    await addProduct(mockReq as Request, mockRes as Response);
  
    expect(prisma.product.create).toHaveBeenCalledWith({
      data: {
        id: expect.any(String),
        name: 'Test Product',
        description: 'A test product',
        price: 100,
        brand_id: 'brand-id',
        image_url: 'http://example.com/image.png',
        treatmentDuration: 30,
        created_at: expect.any(Date),
      },
    });
    expect(mockRes.json).toHaveBeenCalledWith(mockProduct);
  });

  // Test for getProducts
  describe('getProducts', () => {
    it('should fetch all products and return them', async () => {
      const mockProducts = [
        { id: '1', name: 'Product 1', description: 'Description 1', price: 100, brand: { name: 'Brand 1' }, reviews: [], },
        { id: '2', name: 'Product 2', description: 'Description 2', price: 200, brand: { name: 'Brand 2' }, reviews: [] },
      ];

      (prisma.product.findMany as jest.Mock).mockResolvedValue(mockProducts);

      // Call the function
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

    it('should handle errors and return 500', async () => {
      (prisma.product.findMany as jest.Mock).mockRejectedValue(new Error('Database error'));

      // Call the function
      await getProducts(mockReq as Request, mockRes as Response);

      // Assertions
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({ error: 'Products not found' }));
    });
  });
});