import { useEffect, useState } from "react";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

interface Task {
  id: string;
  task: string;
  completed: boolean;
}

function TodoList() {
  const initialTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };
  const [todos, setTodos] = useState<Task[]>(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const sort = (todos: Task[]) => {
    return todos.sort((a, b) =>
      a.completed === b.completed ? 0 : a.completed ? 1 : -1
    );
  };

  const create = (newTodo: Task) => {
    setTodos(sort([...todos, newTodo]));
  };

  const remove = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const update = (id: string, updtedTask: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(sort(updatedTodos));
  };

  const todosList = todos.map((todo) => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <>
      <TodoForm createTodo={create} />
      <ul className="divide-y divide-gray-200 px-4 pt-4">{todosList}</ul>
    </>
  );
}

export default TodoList;
