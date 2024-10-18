import Task from "./Task";
import EditTask from "./EditTask"; // Importing EditTask directly here

export default function TaskList({ tasks, dispatch, isEditModalOpen, taskToEdit }) {
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
            />
          ))}
        </section>
      )}
      
      {isEditModalOpen && (
        <EditTask
          task={taskToEdit} 
          dispatch={dispatch}
          isOpen={isEditModalOpen}
          handleClose={() => dispatch({ type: "CLOSE_EDIT_MODE" })}
        />
      )}
    </>
  );
}
