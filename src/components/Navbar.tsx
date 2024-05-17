function Navbar({ toggleDarkMode }: { toggleDarkMode: () => void }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Zavant Technical Test
      </h1>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a8 8 0 018 8 8 8 0 01-8 8 8 8 0 110-16zm3.95 10.95a7.026 7.026 0 01-7.9 0 6.978 6.978 0 011.27-8.92A7.026 7.026 0 0113.95 12.95z" />
        </svg>
        Toggle Mode
      </button>
    </nav>
  );
}

export default Navbar;
