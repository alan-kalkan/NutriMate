import { test, expect } from '@jest/globals';
import { prismaMock } from '../src/utils/singleton';
import { mockProducts, mockFavorites } from '../src/utils/constants';


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

test('should return favorites products for an user', async () => {
    prismaMock.favorite.findMany.mockResolvedValue(mockFavorites);

    const favorites = await prismaMock.favorite.findMany({ where: { user_id: '1' }, include: { product: true } });
    expect(favorites).toEqual(mockFavorites);
});

test('should return a product by name', async () => {
    prismaMock.product.findFirst.mockResolvedValue(mockProducts[0]);

    const product = await prismaMock.product.findFirst({ where: { name: 'Product 1' } });
    expect(product).toEqual(mockProducts[0]);
});

test('should update a product', async () => {
    prismaMock.product.update.mockResolvedValue(mockProducts[0]);

    const product = await prismaMock.product.update({ where: { id: '1' }, data: { name: 'Updated Product' } });
    expect(product).toEqual(mockProducts[0]);
});

test('should delete a product', async () => {
    prismaMock.product.delete.mockResolvedValue(mockProducts[0]);

    const product = await prismaMock.product.delete({ where: { id: '1' } });
    expect(product).toEqual(mockProducts[0]);
});

test('should handle errors when fetching a product by id', async () => {
  prismaMock.product.findUnique.mockRejectedValue(new Error('Database error'));

  await expect(prismaMock.product.findUnique({ where: { id: '1' } })).rejects.toThrow('Database error');
});