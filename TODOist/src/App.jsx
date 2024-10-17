import { useEffect, useReducer } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import FilterSort from "./components/FilterSort";
import TaskList from "./components/TaskList";

function renderTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (!savedTasks) {
    return [];
  }

  return JSON.parse(savedTasks);
}
const initialState = {
  isModalOpen: false,
  tasks: renderTasks(),
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true };

    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };

    case "SET_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "TOGGLE_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isComplete: !task.isComplete }
            : task
        ),
      };

    case "TOGGLE_DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "TOGGLE_EDIT":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      };
  }
}

export default function App() {
  const [{ isModalOpen, tasks }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);
  return (
    <div className="app">
      <Header />
      <Main isOpen={isModalOpen} dispatch={dispatch} />
      <FilterSort />
      <TaskList
        tasks={tasks}
        dispatch={dispatch}
        isEditModalOpen={isModalOpen}
      />
      <Footer tasks={tasks} />
    </div>
  );
}
