import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddTask from "./AddTask";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(true);
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  return (
    <main className="add_task--section">
      <div className="add_task--date">
        <h2>Today</h2>
        <time className="add_task--date">{formattedDate}</time>
      </div>
      <button className="add-task__btn btn" onClick={handleModalOpen}>
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
        Add Task
      </button>
      {isOpen && <AddTask handleClose={handleModalClose} />}
    </main>
  );
}
