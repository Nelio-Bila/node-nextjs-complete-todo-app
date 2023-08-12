import  Todo from "@/types/Todo";
import { Draggable } from "react-beautiful-dnd";
import { AiOutlineClose } from "react-icons/ai";

interface TodoItemProps {
    todo: Todo;
    index: number;
    handleToggleCompletion: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
  }
  
  const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    index,
    handleToggleCompletion,
    handleDeleteTodo,
  }) => {
    return (
      <Draggable key={todo.id} draggableId={todo.id as string} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`bg-gray-100 dark:bg-gray-700 flex justify-between items-center ${index===0?"rounded-t":""}  p-2 border-b dark:border-b-slate-600`}
          >
            <input
              type="checkbox"
              name="completed"
              id={`completed-${todo.id}`}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 flex-none rounded-full border-gray-300 w-5 h-5 m-1"
              checked={todo.completed}
              onChange={() => handleToggleCompletion(todo.id as string)}
            />
            <label
              htmlFor={`completed-${todo.id}`}
              className={`title ${todo.completed ? "line-through" : ""}`}
            >
              {todo.title}
            </label>
            <button className="delete-todo-btn" onClick={() => handleDeleteTodo(todo.id as string)}>
              <AiOutlineClose />
            </button>
          </div>
        )}
      </Draggable>
    );
  };

  export default TodoItem;