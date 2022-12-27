import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task}) {
  const {deleteTask} = useContext(TaskContext)

  return (
      <div className='bg-gray-800 text-white p-4 rounded-md m-3'>
        <h1 className='text-xl font-bold capitalize'>{task.titulo}</h1>
        <p className='text-gray-500 text-sm'>{task.descripcion}</p>
        <button className='bg-red-600 px-2 py-1 rounded-xl mt-4 text-yellow-50 font-bold
        hover:bg-red-400' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
      </div>
  );
}

export default TaskCard;
