export default function Footer({tasks}) {
  const taskLength = tasks.length;
  return (
    <footer>
      <p className="total_tasks">{taskLength} tasks left</p>
      <p className="clear_tasks">clear completed tasks</p>
    </footer>
  );
}
