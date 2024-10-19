import useTaskContext from "../hooks/useTaskContext";

export default function Footer() {
  const {tasks, dispatch} = useTaskContext()
  const taskLength = tasks.length;

  function clearCompleted(){
    dispatch({type: 'CLEAR_COMPLETED'})
  }
  return (
    <footer>
      <p className="total_tasks">{taskLength} tasks left</p>
      <p className="clear_tasks" onClick={clearCompleted}>clear completed tasks</p>
    </footer>
  );
}
