import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const itemsPerPage = parseInt(req.query.itemsPerPage as string) || 10;
    const totalTodos = await prisma.todo.count();
    const totalPages = Math.ceil(totalTodos / itemsPerPage);

    const todos = await prisma.todo.findMany({
      skip: (page - 1) * itemsPerPage,
      take: itemsPerPage,
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json({ todos, totalPages });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching todos' });
  }
};



export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.findUnique({
      where: { id },
    });
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the todo' });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const { title, description, completed } = req.body;
  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        completed,
      },
    });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the todo' });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        title,
        description,
        completed,
      },
    });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the todo' });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.todo.delete({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the todo' });
  }
};
