import { Prisma } from '@prisma/client';

export interface TodoCreateInput {
  title: string;
  description: string;
  completed: boolean;
}

export interface TodoUpdateInput {
  title?: string;
  description?: string;
  completed?: boolean;
}

export type TodoWhereUniqueInput = Prisma.TodoWhereUniqueInput;
