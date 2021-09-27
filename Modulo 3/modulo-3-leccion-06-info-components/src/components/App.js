import '../styles/App.scss';
import ButtonBlue from './ButtonBlue';
import Preview from './Preview';
import { useState } from 'react';
// import { useEffect, useState } from 'react';
// import callToApi from '../services/api';
// import ls from '../services/local-storage.js'; //localStorage

function App() {
  //estados
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  console.log(
    `Madre: Se renderiza el componente App con el nombre ${name} y el email ${email}`
  );
  //funciones
  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  //html
  return (
    <div>
      <header>
        <h1 className="title">Modulo 3 - Lección 06 - Components y props</h1>
      </header>
      <main>
        <form>
          <label htmlFor="name">Escribe tu nombre</label>
          <input id="name" value={name} onChange={handleName} />
          <label htmlFor="email">Escribe tu email</label>
          <input id="email" value={email} onChange={handleEmail} />
        </form>
        <Preview name={name} email={email} />{' '}
        {/* Se envian a la hija como props los estados */}
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
