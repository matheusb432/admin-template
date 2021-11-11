import { createContext, useState } from 'react';

type Theme = 'dark' | '';

interface AppContextProps {
  theme?: Theme;
  toggleTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<Theme>('dark');

  function toggleTheme() {
    setTheme(theme === '' ? 'dark' : '');
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
export const AppConsumer = AppContext.Consumer;
