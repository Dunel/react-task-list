import { createContext, useState, useEffect } from "react";
import { tasks } from "../task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [data, setTask] = useState([]);

  useEffect(() => {
    setTask(tasks);
  }, []);

  function createTask(newtask) {
    setTask([
      ...data,
      {
        id: data.length,
        title: newtask.Title,
        description: newtask.Desc,
      },
    ]);
  }

  function deleteTask(id) {
    setTask(data.filter((data) => data.id !== id));
  }

  return (
    <TaskContext.Provider value={{ createTask, deleteTask, data }}>
      {props.children}
    </TaskContext.Provider>
  );
}
