import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState(''); // Para o input atual
  const [tasks, setTasks] = useState([]); // Lista de tarefas

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask(''); // Limpa o input
    }
  };

  //Function to cleanup toDo list

  const handleClearTasks = () =>{
    setTasks([]);
  }

  return (
    <div className="p-5">
      <input 
        value={task}
        onChange={e => setTask(e.target.value)}
        className="border p-2 rounded"
      />

      <button onClick={handleAddTask} className="ml-2 bg-blue-500 text-black p-2 rounded">
        Adicionar
      </button>

      <button onClick={handleClearTasks} className="ml-2 bg-red-500 text-black p-2 rounded">
        Limpar
      </button>

        {/*Button to cleanup toDo list*/}
        {/*{tasks.length > 4 && (<button onClick={handleClearTasks} className='p-2 rounded'>Limite atingido</button>)}*/}

      <ul className="mt-5">
        {tasks.map((t, index) => (
          <li key={index} className="border p-2 mb-2 rounded">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
