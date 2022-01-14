import React, { useState, useContext } from "react";

export const DataContext = React.createContext();

export const useAppContext = () => {
  return useContext(DataContext);
};

const Context = ({ children }) => {
  // States
  // const currTheme = localStorage.getItem("theme");
  // const [theme, setTheme] = useState(currTheme ? currTheme : "red");
  const [theme, setTheme] = useState("neutral");

  // Function to toggle the theme
  const toggleTheme = (value) => {
    // console.log(value);
    // localStorage.setItem("theme", value);
    document.getElementsByTagName("HTML")[0].setAttribute("data-theme", value);
    setTheme(value);
  };

  return (
    <>
      <DataContext.Provider value={{ toggleTheme, theme }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default Context;
