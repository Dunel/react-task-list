import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({data}) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <button onClick={() => deleteTask(data.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
