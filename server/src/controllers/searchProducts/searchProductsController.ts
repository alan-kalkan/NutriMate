import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const searchProducts = async (req: Request, res: Response): Promise<void> => {
    const { query } = req.query;
    console.log(query)
    try {
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: query as string,
                },
            },
            include: {
                brand: true,
                categories: {
                    include: {
                        category: true
                    },
                },
            },
        });
        res.json(products);
    } catch (error) {
        console.error('Error searching for products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}