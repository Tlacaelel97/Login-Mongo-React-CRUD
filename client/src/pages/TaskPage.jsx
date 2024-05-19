import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

function TaskPage() {
  const { getTasks, tasks } = useTasks;

  useEffect(() => {
    getTasks();
  }, []);
  // Si la longitud de tasks es igual a cero, retorna un h1 "No hay tareas"?
  if (tasks.length === 0) return (<h1>No tasks</h1>)

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskPage;
