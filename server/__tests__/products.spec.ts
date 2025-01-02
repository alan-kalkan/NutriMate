import { test, expect } from '@jest/globals';
import { prismaMock } from '../src/utils/singleton';
import { Decimal } from '@prisma/client/runtime/library';

const mockProducts = [
    {
        id: '1',
        name: 'Product 1',
        description: null,
        treatmentDuration: null,
        price: new Decimal(100),
        image_url: null,
        averageRating: null,
        created_at: new Date(),
        brand_id: null
    },
    {
        id: '2',
        name: 'Product 2',
        description: null,
        treatmentDuration: null,
        price: new Decimal(200),
        image_url: null,
        averageRating: null,
        created_at: new Date(),
        brand_id: null
    }
];

test('should return all products', async () => {
    
    prismaMock.product.findMany.mockResolvedValue(mockProducts);

    const products = await prismaMock.product.findMany();
    expect(products).toHaveLength(2);
});

test('should return a product by id', async () => {
    prismaMock.product.findUnique.mockResolvedValue(mockProducts[0]);

    const product = await prismaMock.product.findUnique({ where: { id: '1' } });
    expect(product).toEqual(mockProducts[0]);
});