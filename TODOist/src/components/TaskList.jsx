import Task from "./Task";

export default function TaskList({ tasks, dispatch, isEditModalOpen }) {
  return (
    <>
      {tasks.length === 0 ? (
        <p className="warning">Start your day by adding your tasks...</p>
      ) : (
        <section className="task_list">
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              dispatch={dispatch}
              editModal={isEditModalOpen}
            />
          ))}
        </section>
      )}
    </>
  );
}
