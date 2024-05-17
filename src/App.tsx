import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the initial dark mode preference from local storage
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setIsDarkMode(storedDarkMode === "true");
      if (storedDarkMode === "true") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to system preference if not set in local storage
      const darkModePreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(darkModePreference);
      if (darkModePreference) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="h-screen  bg-white dark:bg-slate-900">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className=" bg-white dark:bg-slate-900 pt-16 pb-16">
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-1 pt-10">
            <h1 className="text-gray-800 dark:text-white font-bold text-2xl uppercase">
              To-Do List
            </h1>
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
