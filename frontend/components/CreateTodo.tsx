import React, { useState, KeyboardEvent } from 'react';

interface CreateTodoProps {
    onSubmit: (title: string, completed: boolean) => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ onSubmit }) => {
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoCompleted, setNewTodoCompleted] = useState(false);
  
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && newTodoTitle.trim() !== '') {
          onSubmit(newTodoTitle, newTodoCompleted);
          setNewTodoTitle('');
          setNewTodoCompleted(false);
        }
      };
      

  return (
    <div className="bg-gray-100 dark:bg-gray-700 flex justify-between items-center rounded my-2 p-2">
        <input
        type="checkbox" 
        name="completed"
        id="completed"
        className="bg-gray-100 dark:bg-gray-700 flex-none rounded-full border-gray-300 w-5 h-5 m-1"
        checked={newTodoCompleted}
        onChange={(event) => setNewTodoCompleted(event.target.checked)}
      />
      <input
        type="text"
        name="title"
        id="title"
        className="flex-1 bg-gray-100 dark:bg-gray-700 focus:ring-0 dark:text-white focus:border-0 border-0 rounded p-1"
        placeholder="Insert new todo"
        value={newTodoTitle}
        onChange={(event) => setNewTodoTitle(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default CreateTodo;
