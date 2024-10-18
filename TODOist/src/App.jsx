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
  isEditModalOpen: false,
  taskToEdit: null,
  filter: "all",
  priority: "low",
};

const sortTasks = (tasks, priority) => {
  switch (priority) {
    case "low":
      return tasks.slice().sort((a, b) => (a.priority === "low" ? -1 : 1));

    case "medium":
      return tasks
        .slice()
        .sort((a, b) =>
          a.priority === "medium" ? -1 : a.priority === "low" ? -2 : 1
        );

    case "high":
      return tasks.slice().sort((a, b) => (a.priority === "high" ? -1 : 1));
    default:
      return tasks;
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true };

    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };

    case "TOGGLE_EDIT_MODE":
      return { ...state, isEditModalOpen: true, taskToEdit: action.payload };

    case "CLOSE_EDIT_MODE":
      return { ...state, isEditModalOpen: false, taskToEdit: null };

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
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...action.payload } : task
        ),
      };

    case "TOGGLE_DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "TOGGLE_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "TOGGLE_SORT":
      return {
        ...state,
        priority: action.payload,
        tasks: sortTasks(state.tasks.slice(), action.payload),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.isComplete === false),
      };

    default:
      return state;
  }
}

function filterTasks(tasks, filter) {
  switch (filter) {
    case "active":
      return tasks.filter((task) => task.isComplete === false);
    case "completed":
      return tasks.filter((task) => task.isComplete);
    default:
      return tasks;
  }
}

export default function App() {
  const [
    { isModalOpen, tasks, isEditModalOpen, filter, priority, taskToEdit },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);

  const filteredTasks = sortTasks(filterTasks(tasks, filter), priority);

  return (
    <div className="app">
      <Header />
      <Main isOpen={isModalOpen} dispatch={dispatch} />
      <FilterSort dispatch={dispatch} />
      <TaskList
        tasks={filteredTasks}
        dispatch={dispatch}
        isEditModalOpen={isEditModalOpen}
        taskToEdit={taskToEdit}
      />
      <Footer tasks={tasks} dispatch={dispatch} />
    </div>
  );
}
