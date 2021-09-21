import '../styles/App.scss';

function App() {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderTasks = () => {
    return tasks.map((taskEl, index) => {
      console.log(taskEl);
      return (
        <li key={index} className={taskEl.completed === true ? 'done' : ''}>
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
