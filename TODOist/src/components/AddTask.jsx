import { useEffect } from "react";

export default function AddTask({ isOpen, handleClose }) {
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
  }
  return (
    <div
      className={`add-task-form__wrapper ${isOpen ? "blur" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="add-task-form">
        <h2>Add Task</h2>
        <form>
          <label htmlFor="title">Task Title</label>
          <input type="text" id="title" />
          <label htmlFor="priority">Priority:</label>
          <select name="priority" id="priority">
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
