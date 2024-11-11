import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

//CREATE
export const addBrand = async (req: Request, res: Response): Promise<void> => {
    const { name, description } = req.body;
    const id = uuidv4();

    try {
        const brand = await prisma.brand.create({
            data: { id, name, description },
        });
        res.json(brand);
    } catch (error: any) {
        res.status(500).json({ error: `Error adding brand: ${id}` });
    }
}   

//READ
export const getProductsByBrand = async (req: Request, res: Response): Promise<void> => {
    console.log('getProductsByBrand: ', req.params);
    const { brandId } = req.params;

    try {
        const products = await prisma.product.findMany({
            where: { brand_id: brandId },
        });
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: `Error fetching products from brand: ${brandId}` });
    }  
}

//UPDATE
export const updateBrand = async (req: Request, res: Response): Promise<void> => {
    const { id, ...updateData } = req.body;

    try {
        const brand = await prisma.brand.update({
            where: { id },
            data: updateData,
        });
        res.json(brand);
    } catch (error: any) {
        res.status(500).json({ error: `Error updating brand: ${id}` });
    }
}   

//DELETE
export const deleteBrand = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;

    try {
        const brand = await prisma.brand.delete({
            where: { id },
        });
        res.json(brand);
    } catch (error: any) {
        res.status(500).json({ error: `Error deleting brand: ${id}` });
    }
}   
