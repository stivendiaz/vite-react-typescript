import { useReducer } from "react";
import { v4 as uuid } from "uuid";

import Todo from "./Todo";

function TodoForm({ createTodo }: { createTodo: (todo: Todo) => void }) {
  interface UserInputState {
    task: string;
  }

  const [userInput, setUserInput] = useReducer(
    (state: UserInputState, newState: Partial<UserInputState>) => ({
      ...state,
      ...newState,
    }),
    {
      task: "",
    }
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const newTodo = { id: uuid(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form
      className="w-full max-w-sm mx-auto px-4 py-2 "
      onSubmit={handleSubmit}
    >
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-slate-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={userInput.task}
          onChange={handleChange}
          placeholder="Add a task"
          id="task"
          minLength={3}
          required
          name="task"
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
