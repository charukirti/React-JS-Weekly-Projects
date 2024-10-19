import { useState } from "react";
import useTaskContext from "../hooks/useTaskContext";

export default function FilterSort() {
  const [filter, setFilter] = useState();
  const [priority, setPriority] = useState("low");

  const { dispatch } = useTaskContext();

  function handleFilterChange(e) {
    let currentFilter = e.target.value;
    setFilter(currentFilter);
    dispatch({ type: "TOGGLE_FILTER", payload: currentFilter });
  }

  function handlePriorityChange(e) {
    let currentPriority = e.target.value;
    setPriority(currentPriority);
    dispatch({ type: "TOGGLE_SORT", payload: currentPriority });
  }

  return (
    <section className="filter_sort">
      <div className="filterBy">
        <label htmlFor="filterBy">Filter by category: </label>
        <select
          name="filterBy"
          id="filterBy"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="sortBy">
        <label htmlFor="sortBy">Sort by Priority: </label>
        <select
          name="sortBy"
          id="sortBy"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </section>
  );
}
