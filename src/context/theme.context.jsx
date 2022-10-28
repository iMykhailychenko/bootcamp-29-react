import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [data, setData] = useState([1, 2, 3]);

  return <ThemeContext.Provider value={{ data, setData }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
