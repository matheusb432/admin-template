import { IconMoon, IconSun } from '../icons';

interface ButtonThemeProps {
  theme: string;
  toggleTheme: () => void;
}

// ? using object destructuring in props
export default function ButtonTheme({ theme, toggleTheme }: ButtonThemeProps) {
  return theme === 'dark' ? (
    <div
      onClick={toggleTheme}
      className={`
      hidden sm:flex items-center cursor-pointer
      bg-gradient-to-r from-yellow-300 to-yellow-600 
      w-14 lg:w-20 h-8 p-1 rounded-full
    `}>
      <div
        className={`
      flex justify-center items-center
      bg-white text-yellow-600 
      w-6 h-6 rounded-full 
    `}>
        {IconSun(4)}
      </div>
      <div
        className={`
       hidden lg:flex items-center ml-2
       text-white
    `}>
        <span className='text-xs'>Light</span>
      </div>
    </div>
  ) : (
    <div
      onClick={toggleTheme}
      className={`
      hidden sm:flex items-center justify-end cursor-pointer
      bg-gradient-to-r from-gray-500 to-gray-900 
      w-14 lg:w-20 h-8 p-1 rounded-full
    `}>
      <div
        className={`
         hidden lg:flex items-center mr-2
         text-gray-300
      `}>
        <span className='text-xs'>Dark</span>
      </div>
      <div
        className={`
      flex justify-center items-center
      bg-black text-yellow-300 
      w-6 h-6 rounded-full 
    `}>
        {IconMoon(4)}
      </div>
    </div>
  );
}
