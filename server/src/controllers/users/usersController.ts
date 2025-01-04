import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// CREATE
export const addUser = async (req: Request, res: Response): Promise<void> => {

    const { name, last_name, email, password, gender } = req.body;
    const id = uuidv4();
    const date = new Date();
    const user = await prisma.user.create({
      data: { id, name, last_name, email, password, gender, created_at: date, role: 'user' },
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

  try {
    res.json({ user, token });
  } catch (error: unknown) {
    res.status(500).json({ error: `Error adding user: ${user.name} ${user.last_name}: ${error}` });
  }
};

export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name, last_name, email, password, gender } = req.body;
  const id = uuidv4();
  const date = new Date();
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { id, name, last_name, email, password: hashedPassword, gender, created_at: date, role: 'user' },
  });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  try {
    res.json({ user, token });
  } catch (error: unknown) {
    next(error);
  }
}

// READ
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error: unknown) {
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    res.json(user);
  } catch (error: unknown) {
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token, userId: user.id });
  } catch (error: unknown) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// UPDATE
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id, ...updateData } = req.body;
    try {
        const user = await prisma.user.update({
            where: { id: id },
            data: updateData,
        });
        res.json(user);
    } catch (error: unknown) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Error updating user' });
    }
}


export const updatePassword = async (req: Request, res: Response): Promise<void> => {
    const { id, newPassword } = req.body;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const user = await prisma.user.update({
        where: { id: id },
        data: { password: hashedPassword },
    });
    try {
        res.json(user);
    } catch (error: unknown) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: 'Error updating password' });
    }
}

// DELETE
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const user = await prisma.user.delete({
        where: { id }
    })
    try {
        res.json(user);
    } catch (error: unknown) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Error deleting user' });
    }
}