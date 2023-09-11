import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const DarkModeContext = createContext<{
  isDarkMode: string;
  toggleDarkMode: { (): void } | null;
}>({ isDarkMode: 'false', toggleDarkMode: null });

const DarkModeProvider = ({ children }: { children: React.JSX.Element }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
    'isDarkMode',
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((isDark: string) => !isDark);
  };

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error('DarkModeContext was used outside of DarkModeProvider');
  return context;
};

export { DarkModeProvider, useDarkMode };
