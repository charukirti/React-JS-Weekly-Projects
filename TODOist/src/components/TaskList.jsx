import Task from "./Task";

export default function TaskList ({tasks}){
    return (
        <section className="task_list">
            {tasks.map((task, index) => <Task key={index} task={task}/>)}
        </section>
    )
}

