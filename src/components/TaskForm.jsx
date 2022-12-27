import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      titulo,
      descripcion,
    });
    setTitulo("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit} className= "bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white rounded-md text-center">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
        className= "bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />

      <textarea
        placeholder="Escribe tu tarea"
        onChange={(e) => setDescripcion(e.target.value)}
        className= "bg-slate-300 p-3 w-full mb-2"
        value={descripcion}
      ></textarea>
      <button className="bg-indigo-600 px-3 py-1 text-white rounded-xl hover:bg-indigo-400 font-bold">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
