import '../styles/App.scss';
import { useState } from 'react';
import tasksData from '../data.json'; //importa de otro file

function App() {
  //STATES----------------------------------------------------------
  const [tasks, setTasks] = useState(tasksData); //mueve datos de file a state
  const [searchTask, setSearchTask] = useState('');
  const [numList, setNumList] = useState(0);
  const [numCompleted, setNumCompleted] = useState(0);

  //FUNCTION---------------------------------------------------------
  const handleClick = (ev) => {
    const clickedEl = tasks.find(
      (task) => task.id === parseInt(ev.currentTarget.id)
    );
    clickedEl.completed = !clickedEl.completed;
    setTasks([...tasks]); //se actualizan datos en el use state
  };
  const handleFilter = (ev) => {
    setSearchTask(ev.currentTarget.value);
  };
  const renderTasks = () => {
    return (
      tasks
        // Filtramos por nombre
        .filter((taskEl) => {
          taskEl.id = taskEl.id + '0'; //apaño para modificar id en State, cambia de orden al filtrar
          return taskEl.task.toLowerCase().includes(searchTask.toLowerCase());
        })
        // Mapeamos
        .map((taskEl, i) => {
          taskEl.id = i; //añado id a State
          return (
            <li
              key={i}
              id={i}
              onClick={handleClick}
              className={taskEl.completed === true ? 'done' : ''}
            >
              {taskEl.task}
            </li>
          );
        })
    );
  };

  // //da error---------------
  const handleNumCompleted = () => {
    //donde llamo a esta función???????????????????????????????????????
    for (let i = 0; i < tasks.length; i++) {
      setNumList(i + 1); //añadir num li a State
    }
    const completedTask = tasks.find((taskEl) => taskEl.completed === true);
    const completedNum = completedTask.key + 1;
    setNumCompleted(completedNum);
  };

  //HTML-----------------------------------------------------------------------
  return (
    <div>
      <header>
        <h1 className="title">3.4 Arrays y Objetos - Ejercicio 2</h1>
      </header>
      <main>
        <ul>{renderTasks()}</ul>
        <label htmlFor="filter"></label>
        <input
          onChange={handleFilter}
          type="text"
          name="filter"
          id="filter"
          value={searchTask}
        />
        <ul>
          <li>Tareas totales: {numList}</li>
          <li>Tareas completadas: 2 {/* {numCompleted} */}</li>
          <li>Tareas pendientes: 3 {/* {numList - numCompleted}*/}</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
