import { useState } from "react";
import { v4 as uuid } from "uuid";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import FilterSort from "./components/FilterSort";
import TaskList from "./components/TaskList";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModalOpen() {
    setIsOpen(true);
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  const tasks = [
    {
      id: uuid(),
      taskName: "Eat",
      taskDesc: "Eat that meal",
      priority: "low",
      isComplete: false,
    },

    {
      id: uuid(),
      taskName: "Walk",
      taskDesc: "Take a long walk",
      priority: "medium",
      isComplete: false,
    },

    {
      id: uuid(),
      taskName: "Code",
      taskDesc: "Code that project",
      priority: "high",
      isComplete: false,
    },

    {
      id: uuid(),
      taskName: "Sleep",
      taskDesc: "Take a good sleep",
      priority: "low",
      isComplete: false,
    },
  ];

  console.log(tasks);
  return (
    <div className="app">
      <Header />
      <Main
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        handleModalOpen={handleModalOpen}
      />
      <FilterSort />
      <TaskList tasks={tasks} />
      <Footer tasks={tasks} />
    </div>
  );
}
