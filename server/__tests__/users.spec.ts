import { test, expect } from '@jest/globals';
import { prismaMock } from '../src/utils/singleton';
import { mockUsers } from '../src/utils/constants';

test('should return all users', async () => {
    prismaMock.user.findMany.mockResolvedValue(mockUsers);

    const users = await prismaMock.user.findMany();
    expect(users).toHaveLength(1);
});

test('should return a user by id', async () => {
    prismaMock.user.findUnique.mockResolvedValue(mockUsers[0]);

    const user = await prismaMock.user.findUnique({ where: { id: '1' } });
    expect(user).toEqual(mockUsers[0]);
});

test('should add new user', async () => {
    prismaMock.user.create.mockResolvedValue(mockUsers[0]);

    const user = await prismaMock.user.create({ data: mockUsers[0] });
    expect(user).toEqual(mockUsers[0]);
});