import '../styles/App.scss';
import { useState } from 'react';
import tasksData from '../data.json'; //importa de otro file

function App() {
  const [tasks, setTasks] = useState(tasksData); //mueve datos de file a state
  const handleClick = (ev) => {
    console.log(ev.currentTarget);
    const clickedEl = tasks.find(
      (task) => task.id === parseInt(ev.currentTarget.id)
    );
    console.log(clickedEl);
    clickedEl.completed = !clickedEl.completed;
    setTasks([...tasks]); //se actualizan datos en el use state
  };
  const renderTasks = () => {
    return tasks.map((taskEl, i) => {
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
    });
  };
  return (
    <div>
      <header>
        <h1 className="title">3.4 Arrays y Objetos - Ejercicio 2</h1>
      </header>
      <main>
        <ul>{renderTasks()}</ul>
      </main>
    </div>
  );
}

export default App;
