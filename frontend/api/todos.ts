import axios from 'axios';
import  Todo from "@/types/Todo";
const ITEMS_PER_PAGE = 10;



const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const getAllTodos = async (currentPage: number) => {
    try {
      const response = await api.get('/todos');
      const {todos} = response.data;
  
      if (!Array.isArray(todos)) {
        throw new Error('Invalid response from API: Expected an array of todos.');
      }
  
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      
      const displayedTodos = todos.slice(startIndex, endIndex);

  
      return displayedTodos;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  };

export const getTodoById = async (id: string) => {
  try {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todo by ID:', error);
    throw error;
  }
};

export const createTodo = async (todo: Todo) => {
  try {
    const response = await api.post('/todos', todo);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

export const updateTodo = async (id: string, todo: Todo) => {
  try {
    const response = await api.put(`/todos/${id}`, todo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await api.delete(`/todos/${id}`);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};



const TodoApi = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  };
  
  export default TodoApi;
