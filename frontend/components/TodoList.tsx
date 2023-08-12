import  Todo from "@/types/Todo";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    handleToggleCompletion: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
    onDragEnd: (result: DropResult) => void; 
  }
  
  const TodoList: React.FC<TodoListProps> = ({
    todos,
    handleToggleCompletion,
    handleDeleteTodo,
    onDragEnd
  }) => {
    const now = Date.now();
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={`todo-list-${now}`}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                  handleToggleCompletion={handleToggleCompletion}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  };

  export default TodoList;