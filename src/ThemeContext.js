// src/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from './styles/theme';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeObject = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ ...themeObject }}>{children}</div>
    </ThemeContext.Provider>
  );
};
