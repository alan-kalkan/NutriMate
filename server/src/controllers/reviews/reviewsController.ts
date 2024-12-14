import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

//CREATE
export const addReview = async (req: Request, res: Response): Promise<void> => {
    const { rating, comment, product_id, user_id } = req.body;
    const id = uuidv4();
    const date = new Date();
    console.log('add review req body from backend', req.body);
    try {
        const review = await prisma.review.create({
            data: { id, rating: Number(rating), comment, created_at: date, product_id, user_id },
        });
        res.json(review);
    } catch (error: any) {
        res.status(500).json({ error: 'Error adding review' });
    }
}

//READ
export const getReviewsByProduct = async (req: Request, res: Response): Promise<void> => {
    const { product_id } = req.params;

    try {
        const reviews = await prisma.review.findMany({
            where: { product_id },
            include: {
                user: {
                    select: {
                        name: true,
                        last_name: true,
                    },
                },
            },
        });
        res.json(reviews);
    } catch (error: any) {
        res.status(500).json({ error: 'Error fetching reviews' });
    }
}

//UPDATE
export const updateReview = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { rating, comment } = req.body;

    try {
        const review = await prisma.review.update({
            where: { id },
            data: { rating, comment },
        });
        res.json(review);
    } catch (error: any) {
        res.status(500).json({ error: 'Error updating review' });
    }
}

//DELETE
export const deleteReview = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        await prisma.review.delete({ where: { id } });
        res.json({ message: 'Review deleted' });
    } catch (error: any) {
        res.status(500).json({ error: 'Error deleting review' });
    }
}