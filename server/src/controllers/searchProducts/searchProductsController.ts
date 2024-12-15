import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const searchProducts = async (req: Request, res: Response): Promise<void> => {
    const { query, brand } = req.query;
    console.log(query, brand);
    try {
        const products = await prisma.product.findMany({
            where: {
                AND: [
                    {
                        name: {
                            contains: query as string,
                        },
                    },
                    {
                        brand: {
                            name: {
                                contains: brand as string,
                            },
                        },
                    },
                ],
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