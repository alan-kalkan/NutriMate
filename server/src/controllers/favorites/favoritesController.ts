import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

export const addFavorite = async (req: Request, res: Response): Promise<void> => {
    const { userId, productId } = req.params;
    const date = new Date();
    const id = uuidv4();
    const favorite = await prisma.favorite.create({ data: { id, user_id: userId, product_id: productId, created_at: date } });
    res.json(favorite);
}

export const getFavorites = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const favorites = await prisma.favorite.findMany({ where: { user_id: userId } });
    res.json(favorites);
}

export const getFavoritesByProductId = async (req: Request, res: Response): Promise<void> => {
    const { userId, productId } = req.params;
    const favorite = await prisma.favorite.findFirst({ where: { user_id: userId, product_id: productId } });
    res.json(favorite);
}

export const deleteFavorite = async (req: Request, res: Response): Promise<void> => {
    const { userId, productId } = req.params;
    const favorite = await prisma.favorite.deleteMany({ where: { user_id: userId, product_id: productId } });
    res.json(favorite);
}