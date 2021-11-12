import { createContext, useEffect, useState } from 'react';
import { LocalStorageKeys } from '../../model/local-storage-keys.enum';

type Theme = 'dark' | '';

const validThemes: Theme[] = ['dark', ''];

const defaultTheme: Theme = 'dark';

const themeKey = LocalStorageKeys.Theme;

interface AppContextProps {
  theme?: string;
  toggleTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<string>(defaultTheme);

  useEffect(() => {
    const storageTheme = localStorage.getItem(themeKey);

    if (storageTheme == null) return;

    setTheme(isValidTheme(storageTheme) ? storageTheme : defaultTheme);
  }, []);

  useEffect(() => {
    if (theme == null) return;

    localStorage.setItem(themeKey, theme);
  }, [theme]);

  const isValidTheme = (t: any) => validThemes.includes(t);

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
