export default function FilterSort() {
  return (
    <section className="filter_sort">
      <div className="filterBy">
        <label htmlFor="filterBy">Filter by category: </label>
        <select name="filterBy" id="filterBy">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="sortBy">
        <label htmlFor="sortBy">Sort by Priority: </label>
        <select name="sortBy" id="sortBy">
          <option value="">Low</option>
          <option value="">Medium</option>
          <option value="">High</option>
        </select>
      </div>
    </section>
  );
}
