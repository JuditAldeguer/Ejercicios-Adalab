import '../styles/App.scss';
import ButtonBlue from './ButtonBlue';
// import { useEffect, useState } from 'react';
// import callToApi from '../services/api';
// import ls from '../services/local-storage.js'; //localStorage

function App() {
  return (
    <div>
      <header>
        <h1 className="title">Starter Kit</h1>
      </header>
      <main>
        <ButtonBlue
          text="Iniciar sesión"
          title="Pulsa aquí para iniciar sesión en Instagram"
          type="xl"
        />
      </main>
    </div>
  );
}

export default App;
