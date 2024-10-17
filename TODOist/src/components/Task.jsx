import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import EditTask from "./EditTask";

export default function Task({ task, dispatch, isEditModalOpen }) {
  function handleComplete(id) {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  }

  function handleDelete(id) {
    dispatch({ type: "TOGGLE_DELETE", payload: id });
  }

  function handleEditMode(task) {
    dispatch({ type: "TOGGLE_EDIT_MODE", payload: task });
  }

  function handleCloseModal() {
    dispatch({ type: "CLOSE_EDIT_MODE" });
  }

  return (
    <>
      <div
        className={`task_item ${task.priority === "low" && "low"} ${
          task.priority === "medium" && "medium"
        } ${task.priority === "high" && "high"}`}
      >
        <h4 className={`task_item--name ${task.isComplete ? "complete" : ""}`}>
          {task.taskName}
        </h4>
        <p className="task_item--desc">{task.desc}</p>

        <div className="task_item--btns">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="btn__complete"
            onClick={() => handleComplete(task.id)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="btn__edit"
            onClick={() => handleEditMode(task)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="btn__delete"
            onClick={() => handleDelete(task.id)}
          />
        </div>
      </div>

      {isEditModalOpen && (
        <EditTask
          task={task}
          dispatch={dispatch}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
}
