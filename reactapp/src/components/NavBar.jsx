import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold dark:text-white">React App</h1>

      <button
        onClick={toggleTheme}
        className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-sm transition duration-300"
      >
        {theme === "dark" ? "Light Mode" : " Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

