import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

// CREATE
export const addProduct = async (req: Request, res: Response): Promise<void> => {

    const { name, description, price, brand_id, image_url, treatmentDuration } = req.body;
    const id = uuidv4();
    const date = new Date();
    const product = await prisma.product.create({
      data: { id, name, description, price, brand_id, image_url, treatmentDuration, created_at: date },
    });

  try {
    res.json(product);
  } catch (error: unknown) {
    console.log(error);
    res.status(500).json({ error: 'Error adding product: ' + product.name });
  }
};

// READ
export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await prisma.product.findMany({
        include: {
          brand: true,
          reviews: true,
        }
      });
      res.json(products);
    } catch (error: unknown) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Products not found' });
    }
  };

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const product = await prisma.product.findUnique({
        where: { id },
        include: {
          brand: {
            select: {
              name: true, // Ensure the brand name is included
            }
          },
          reviews: true,
        }
      });
      
      if (!product) {
        res.status(404).json({ error: 'Product not found for id: ' + id });
        return;
      }

      res.json(product);
    } catch (error: unknown) {
      console.error('Error retrieving product:', error);
      res.status(500).json({ error: 'Error retrieving product for id: ' + id });
    }
};

export const getFavorites = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    try {
      const favorites = await prisma.favorite.findMany({
        where: { user_id: userId },
        include: {
          product: true,
        }
      });
      res.json(favorites);
    } catch (error: unknown) {
      console.error('Error retrieving favorites:', error);
      res.status(500).json({ error: 'Error retrieving favorites for user: ' + userId });
    }
  };

export const getProductByName = async (req: Request, res: Response): Promise<void> => {
    const { productName } = req.params;
    try {
      const product = await prisma.product.findFirst({
        where: { 
          name: {
            contains: productName,
          }
        }
      });
      
      if (!product) {
        res.status(404).json({ error: `Product not found for name: ${productName}` });
        return;
      }
      
      res.json(product);
    } catch (error: unknown) {
      console.error('Error searching product:', error);
      res.status(500).json({ error: `Error searching for product: ${productName}` });
    }
  };
// UPDATE
export const updateProduct = async (req: Request, res: Response): Promise<void> => {

    const { id, name, description, price, image_url, treatmentDuration } = req.body;
    const product = await prisma.product.update({
        where: { id },
        data: { name, description, price, image_url, treatmentDuration },
    });

    try {
        res.json(product);
    } catch (error: unknown) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Error updating product' + product.name });
    }
}

//DELETE
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {

    const { id } = req.body;
    const product = await prisma.product.delete({
        where: { id }
    })

    try {
        res.json(product);
    } catch (error: unknown) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Error deleting product' + product.id });
    }
}