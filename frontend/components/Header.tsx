import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-3 md:w-1/3 space-x-20">
  <h1 className="font-bold text-4xl text-white">TODO</h1>
  <button
    className="text-white text-4xl"
    onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
  >
    {theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
  </button>
</div>
  );
};

export default Header;
