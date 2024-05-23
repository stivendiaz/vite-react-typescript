import { useState, useRef, useEffect } from "react";
import close from "../assets/close.svg";
import edit from "../assets/edit.svg";
import done from "../assets/done.svg";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

function Todo({
  todo,
  remove,
  update,
  toggleComplete,
}: {
  todo: Todo;
  remove: (id: string) => void;
  update: (id: string, task: string) => void;
  toggleComplete: (id: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
    remove(event.currentTarget.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const toggleCompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleComplete(event.currentTarget.id);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [isEditing]);

  return (
    <li className="py-4" key={todo.id}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <div className="flex justify-between items-center">
            <div className="flex items-center border-b-2 border-teal-500 w-full">
              <input
                ref={inputRef}
                type="text"
                value={task}
                onChange={handleChange}
                minLength={3}
                required
                className="ml-3 block appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none dark:text-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="submit"
                className="bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-200"
                aria-label="Save"
              >
                <span className="sr-only">Save</span>
                <img src={done} alt="Save" />
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <input
              checked={todo.completed}
              id={todo.id}
              type="checkbox"
              onChange={toggleCompleted}
              className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-xl border border-slate-950 border- transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10 dark:border-gray-50"
            />

            <label className="ml-3 block text-gray-900  w-[150px] xs:w-[180px] sm:w-[250px] lg:w-[300px] xl:w-[320px] break-words">
              {todo.completed ? (
                <span className="line-through text-gray-400">{todo.task}</span>
              ) : (
                <span className="text-lg font-medium dark:text-slate-50">
                  {todo.task}
                </span>
              )}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <button
              id={todo.id}
              type="button"
              className="bg-white text-gray-400 hover:text-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-200"
              aria-label="Edit"
              onClick={toggleFrom}
            >
              <span className="sr-only">Edit</span>
              <img src={edit} alt="Edit" />
            </button>
            <button
              id={todo.id}
              type="button"
              className="bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-200"
              aria-label="Close"
              onClick={handleClick}
            >
              <span className="sr-only">Close</span>
              <img src={close} className="logo react" alt="React logo" />
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Todo;
