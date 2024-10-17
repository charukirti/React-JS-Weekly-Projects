import { useEffect, useState } from "react";

export default function EditTask({ isOpen, handleClose, task, dispatch }) {
  const [taskName, setTaskName] = useState(task.taskName || "");
  const [priority, setPriority] = useState(task.priority || "low");
  const [description, setDescription] = useState(task.desc || "");
  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.key === "Escape") {
          handleClose();
        }
      }

      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
      }

      return () => document.removeEventListener("keydown", handleKeyDown);
    },
    [isOpen, handleClose]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!taskName.trim() && !description.trim()) return;

    const updatedTask = {
      ...task,
      taskName: taskName,
      desc: description,
      priority: priority,
    };

    dispatch({
      type: "EDIT_TASK",
      payload: updatedTask,
    });

    handleClose();
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
      className={`add-task-form__wrapper ${isOpen ? "blur" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="add-task-form">
        <h2>Edit Task</h2>
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
            <button className="btn add__btn">Save Changes</button>
            <button className="btn close__btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
