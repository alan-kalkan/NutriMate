import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

//CREATE
export const addCategory = async (req: Request, res: Response): Promise<void> => {

    const { name, description } = req.body;
    const id = uuidv4();
    
    try {

        const category = await prisma.category.create({
            data: { id, name, description},
        });

        res.json(category);
    } catch (error: any) {
        res.status(500).json({ error: 'Error adding category' + id });
    }
}

export const addProductToCategory = async (req: Request, res: Response): Promise<void> => {

    const { productId, categoryId } = req.body;

    try { 

        const productCategory = await prisma.productCategory.create({
            data: {
                product_id: productId,
                category_id: categoryId,
            }
        })

        res.json(productCategory);
    } catch (error: any) {
        res.status(500).json({ error: 'Error adding product' + productId + 'to category' + categoryId });
    }
}

//READ

export const getProductsByCategory = async (req: Request, res: Response): Promise<void> => {

    const { categoryId } = req.params;
    
    try {
        const category = await prisma.category.findUnique({
            where: { id: categoryId },
            include: {
                products: {
                    include: {
                        product: true, // This includes the full product details
                    },
                },
            },
        });
        
        if (!category) {
            res.status(404).json({ error: 'Category not found' });
            return;
        }

        // Transform the data to return just the products
        const products = category.products.map(pc => pc.product);
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: 'Error fetching products from category:' + categoryId });
    }
}

//UPDATE
export const updateCategory = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, description } = req.body;
    
    try {
        const updatedCategory = await prisma.category.update({
            where: { id },
            data: {
                name,
                description,
            },
        });
        
        res.json(updatedCategory);
    } catch (error: any) {
        res.status(500).json({ error: 'Error updating category: ' + id });
    }
}

export const updateProductCategory = async (req: Request, res: Response): Promise<void> => {
    
    const { oldProductId, oldCategoryId } = req.params;
    const { newProductId, newCategoryId } = req.body;
    
    try {
        // First delete the old relationship
        await prisma.productCategory.delete({
            where: {
                product_id_category_id: {
                    product_id: oldProductId,
                    category_id: oldCategoryId,
                },
            },
        });
        
        // Then create the new relationship
        const updatedProductCategory = await prisma.productCategory.create({
            data: {
                product_id: newProductId,
                category_id: newCategoryId,
            },
        });
        
        res.json(updatedProductCategory);
    } catch (error: any) {
        res.status(500).json({ error: 'Error updating product-category relationship' });
    }
}

//DELETE

export const removeProductFromCategory = async (req: Request, res: Response): Promise<void> => {

    const { productId, categoryId } = req.params;
    
    try {
        await prisma.productCategory.delete({
            where: {
                product_id_category_id: {
                    product_id: productId,
                    category_id: categoryId,
                },
            },
        });
        
        res.json({ message: 'Product removed from category successfully' });
    } catch (error: any) {
        res.status(500).json({ error: 'Error removing product from category' });
    }
}