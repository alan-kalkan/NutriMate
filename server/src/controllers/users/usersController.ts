import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

// CREATE
export const addUser = async (req: Request, res: Response): Promise<void> => {

    const { name, last_name, email, password, gender } = req.body;
    const id = uuidv4();
    const date = new Date();
    const user = await prisma.user.create({
      data: { id, name, last_name, email, password, gender, created_at: date },
    });

  try {
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ error: `Error adding user: ${user.name} ${user.last_name}: ${error.message}` });
  }
};

// READ
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ error: `Internal server error: ${error.message}` });
  }
};

// UPDATE
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id, ...updateData } = req.body;
    
    try {
        const user = await prisma.user.update({
            where: { id: id },
            data: updateData,
        });
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ error: `Error updating user: ${error.message}` });
    }
}

// DELETE
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;
    const user = await prisma.user.delete({
        where: { id }
    })
    try {
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ error: `Error deleting user ${user.id}: ${error.message}` });
    }
}