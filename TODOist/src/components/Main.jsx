import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddTask from "./AddTask";
import useTaskContext from "../hooks/useTaskContext";

export default function Main() {
  const { isModalOpen, dispatch } = useTaskContext();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const weekDay = days[currentDate.getDay()];
  const date = currentDate.getDate();

  function getDayWithSuffix(day) {
    if (day > 3 && day < 21) return day + "th";
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }

  const formattedDay = getDayWithSuffix(date);

  const formattedDate = `${formattedDay} ${month}, ${weekDay}`;

  function handleModalOpen() {
    dispatch({ type: "OPEN_MODAL" });
  }

  function handleModalClose() {
    dispatch({ type: "CLOSE_MODAL" });
  }

  return (
    <main className="add_task--section">
      <div className="add_task--date">
        <h2>Today</h2>
        <time className="add_task--time">{formattedDate}</time>
      </div>
      <button className="add-task__btn " onClick={handleModalOpen}>
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
        Add Task
      </button>
      {isModalOpen && (
        <AddTask
          handleClose={handleModalClose}
          isModalOpen={isModalOpen}
          dispatch={dispatch}
        />
      )}
    </main>
  );
}
