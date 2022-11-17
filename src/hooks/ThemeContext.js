import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {


  
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// const [theme, setTheme] = useState("light-theme");

// const toggleTheme = () => {
//   if (theme === "dark-theme") {
//     setTheme("light-theme");
//   } else {
//     setTheme("dark-theme");
//   }
// };

// useEffect(() => {
//   document.body.className = theme;
// }, [theme]);

