import Task from "./Task";
import EditTask from "./EditTask";
import useTaskContext from "../hooks/useTaskContext";

export default function TaskList() {
  const { filteredTasks, dispatch, isEditModalOpen, taskToEdit } =
    useTaskContext();
  return (
    <>
      {filteredTasks.length === 0 ? (
        <p className="warning">Start your day by adding your tasks...</p>
      ) : (
        <section className="task_list">
          {filteredTasks.map((task, index) => (
            <Task key={index} task={task} dispatch={dispatch} />
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
