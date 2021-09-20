// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterInput = (ev) => {
    ev.preventDefault();
    setCounter(ev.target.value);
  };

  const handleResetCounter = (ev) => {
    //da error, entra por aquí con Enter
    debugger;
    ev.preventDefault();
    setCounter(0);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const [giftWrapper, setGiftWrapper] = useState(false);
  const handleGiftWraperInput = (ev) => {
    // Guardamos en el estado la propiedad checked que siempre es un booleano
    setGiftWrapper(ev.target.checked);
  };
  const handleResetGiftWrapper = () => {
    setGiftWrapper(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>El contador:</h2>
          <label htmlFor="counter">Escribe aquí el valor del contador:</label>
          <input
            type="number"
            name="counter"
            id="counter"
            value={counter}
            onChange={handleCounterInput}
          />
          <button onClick={handleResetCounter} onSubmit={handleSubmit}>
            Resetear el contador
          </button>
          <p>Valor de contador: {counter}</p>
        </fieldset>
        <fieldset>
          <h2>Tienda online:</h2>
          <label htmlFor="giftWrapper">
            Marca esta opción si quieres envolver para regalo tu producto:
          </label>
          {/* Usamos giftWrapper para controlar la propiedad checked del input */}
          <input
            type="checkbox"
            name="giftWrapper"
            id="giftWrapper"
            checked={giftWrapper}
            onChange={handleGiftWraperInput}
          />
          <button onClick={handleResetGiftWrapper}>
            Resetear el formulario
          </button>
          <p>¿Te lo envolvemos para regalo? {giftWrapper ? 'Sí' : 'No'}</p>
        </fieldset>
      </form>
    </div>
  );
};

export default App;
