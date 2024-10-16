import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

export default function Task({ task }) {
  return (
    <div
      className={`task_item ${task.priority === "low" && "low"} ${
        task.priority === "medium" && "medium"
      } ${task.priority === "high" && "high"}`}
    >
      <h4 className="task_item--name">{task.taskName}</h4>

      <div className="task_item--btns">
        <FontAwesomeIcon icon={faCircleCheck} className="btn__complete" />
        <FontAwesomeIcon icon={faPenToSquare} className="btn__edit" />
        <FontAwesomeIcon icon={faTrashCan} className="btn__delete" />
      </div>
    </div>
  );
}
