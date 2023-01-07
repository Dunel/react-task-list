import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { data } = useContext(TaskContext);
  if (data.length === 0) {
    return <h1>No hay tareas.</h1>;
  }

  return (
    <div>
      {data.map((data) => (
        <TaskCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default TaskList;
