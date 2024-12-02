import React, { createContext, useContext, useState } from 'react';
import { Colors } from '@/constants/Colors';

type ThemeName = keyof typeof Colors;

interface ThemeContextProps {
  theme: ThemeName;
  colors: (typeof Colors)[ThemeName];
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeName>('blue');

  const value = {
    theme,
    colors: Colors[theme],
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
