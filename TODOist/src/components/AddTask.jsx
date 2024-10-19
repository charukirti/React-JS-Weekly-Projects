import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddTask({ isModalOpen, handleClose, dispatch }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("low");
  const [description, setDescription] = useState("");

  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.key === "Escape") {
          handleClose();
        }
      }

      if (isModalOpen) {
        document.addEventListener("keydown", handleKeyDown);
      }

      return () => document.removeEventListener("keydown", handleKeyDown);
    },
    [isModalOpen, handleClose]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!taskName.trim() && !description.trim()) return;
    dispatch({
      type: "SET_TASK",
      payload: {
        id: uuid(),
        taskName: taskName,
        desc: description,
        priority: priority,
        isComplete: false,
      },
    });

    handleClose();
    setTaskName("");
    setPriority("low");
  }

  function handleSetTaskName(e) {
    setTaskName(e.target.value);
  }

  function handleSetPriority(e) {
    setPriority(e.target.value);
  }

  function handleSetDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <div
      className={`add-task-form__wrapper ${isModalOpen ? "blur" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="add-task-form">
        <h2>Add Task</h2>
        <form>
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            id="title"
            value={taskName}
            onChange={handleSetTaskName}
          />
          <label htmlFor="description">Task Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleSetDescription}
          />
          <label htmlFor="priority">Priority:</label>
          <select
            name="priority"
            id="priority"
            onChange={handleSetPriority}
            value={priority}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <div className="add-task-form-btn">
            <button className="btn add__btn">Add</button>
            <button className="btn close__btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
