import React from 'react';

interface FooterProps {
  itemCount: number;
  handleFilterChange: (filter: string) => void;
  handleClearCompleted: () => void;
  activeFilter: string;
}

const Footer: React.FC<FooterProps> = ({
  itemCount,
  handleFilterChange,
  handleClearCompleted,
  activeFilter,
}) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 flex justify-between items-center rounded-b p-2 border-b dark:border-b-slate-600">
      <label className="text-gray-400 text-sm">
        {itemCount} items left
      </label>
      <button
        className={`text-gray-400 text-sm ${
          activeFilter === 'all' ? 'font-bold' : ''
        }`}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={`text-gray-400 text-sm ${
          activeFilter === 'active' ? 'font-bold' : ''
        }`}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </button>
      <button
        className={`text-gray-400 text-sm ${
          activeFilter === 'completed' ? 'font-bold' : ''
        }`}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
      <button className="text-gray-400 text-sm" onClick={handleClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
