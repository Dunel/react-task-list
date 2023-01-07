import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ Title, Desc });
    setTitle("");
    setDesc("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={Title}
          autoFocus
        />
        <input
          type="text"
          placeholder="escribe la descripcion"
          onChange={(e) => setDesc(e.target.value)}
          value={Desc}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
