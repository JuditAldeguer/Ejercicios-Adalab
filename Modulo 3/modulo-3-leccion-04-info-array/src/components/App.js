import { useState } from 'react';
import '../styles/App.scss';

const App = () => {
  const adalabers = ['María', 'Lucía', 'Sofía', 'Nerea'];

  const renderAdalabers = () => {
    return adalabers.map((adalaber, index) => {
      return (
        <li key={index}>
          <span className="adalaber__prefix">El nombre de la alumna es: </span>
          <strong className="adalaber__name">{adalaber}</strong>
        </li>
      );
    });
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">3.4 Arrays</h1>
      </header>
      <main>
        <h2>Lista de Adalabers</h2>
        <ul>{renderAdalabers()}</ul>
      </main>
    </div>
  );
};

export default App;
