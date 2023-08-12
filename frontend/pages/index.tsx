import React, { useState, useEffect } from "react";
import { DropResult } from "react-beautiful-dnd";
import  Todo from "@/types/Todo";
import { getAllTodos, createTodo, updateTodo, deleteTodo } from "@/api/todos";
import Header from "@/components/Header";
import CreateTodo from "@/components/CreateTodo";
import TodoList from "@/components/TodoList";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const filterTodos = () => {
      switch (activeFilter) {
        case "all":
          return todos;
        case "active":
          return todos.filter((todo) => !todo.completed);
        case "completed":
          return todos.filter((todo) => todo.completed);
        default:
          return todos;
      }
    };

    const filtered = filterTodos();
    setFilteredTodos(filtered);
  }, [activeFilter, todos]);

  const fetchTodos = async () => {
    try {
      const fetchedTodos = await getAllTodos(1);
      setTodos(fetchedTodos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async (title: string, completed: boolean) => {
    try {
      const newTodo: Todo = {
        title,
        completed,
      };
      await createTodo(newTodo);
      await fetchTodos();
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const handleToggleCompletion = async (id: string) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) return;

      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };
      await updateTodo(id, updatedTodo);

      const updatedTodos = todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      await fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleClearCompleted = async () => {
    try {
      const completedTodos = todos.filter((todo) => todo.completed);
      for (const todo of completedTodos) {
        await handleDeleteTodo(todo.id as string);
      }
    } catch (error) {
      console.error("Error clearing completed todos:", error);
    }
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedTodos = Array.from(filteredTodos);
    const [reorderedTodo] = reorderedTodos.splice(result.source.index, 1);
    reorderedTodos.splice(result.destination.index, 0, reorderedTodo);

    setFilteredTodos(reorderedTodos);
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center py-24"
      style={{
        backgroundImage: 'url("/assets/images/mountains.jpg")',
        backgroundSize: `100% calc(100vh / 3)`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <div className="md:w-1/3">
        <CreateTodo onSubmit={handleAddTodo} />
        <TodoList
          todos={filteredTodos}
          handleToggleCompletion={handleToggleCompletion}
          handleDeleteTodo={handleDeleteTodo}
          onDragEnd={onDragEnd}
        />
        <Footer
          itemCount={todos.filter((todo) => !todo.completed).length}
          handleFilterChange={handleFilterChange}
          handleClearCompleted={handleClearCompleted}
          activeFilter={activeFilter}
        />
      </div>

      <div className="mt-6 w-1/3 flex justify-center">
        <label className="text-gray-400 text-sm text-center">
          Drag and drop to reorder list
        </label>
      </div>
    </main>
  );
};

export default Home;
