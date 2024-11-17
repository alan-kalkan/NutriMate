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
  } catch (error: any) {
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
    } catch (error: any) {
        res.status(500).json({ error: 'Internal server error' });
      }
  };

export const getProductById = async (req: Request, res: Response): Promise<void> => {
try {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id }
  });
  res.json(product);
} catch (error: any) {
  res.status(500).json({ error: 'Internal server error' });
}
}
// UPDATE
export const updateProduct = async (req: Request, res: Response): Promise<void> => {

    const { id, name, description, price, image_url, treatmentDuration } = req.body;
    const product = await prisma.product.update({
        where: { id },
        data: { name, description, price, image_url, treatmentDuration },
    });

    try {
        res.json(product);
    } catch (error: any) {
        res.status(500).json({ error: 'Error updating product' + product.name })
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
    } catch (error: any) {
        res.status(500).json({ error: 'Error deleting product' + product.id })
    }
}