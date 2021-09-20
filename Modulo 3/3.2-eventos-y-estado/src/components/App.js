import { useState } from 'react'; // Importamos useState desde React porque lo vamos a necesitar más abajo
import '../styles/App.scss';

const App = () => {
  const [email, setEmail] = useState('');
  const handleEmail = (ev) => {
    const inputValue = ev.target.value;
    // Ejecutamos la función setEmail para actualizar el valor del estado email, React guarda el valor del input en la constante email y re-renderiza la página. Esta función la ha creado React al utilizar el useState.
    setEmail(inputValue);
  };

  return (
    <div>
      <h1>Generador de emails:</h1>
      <form>
        <label>
          Escribe un email:
          <input
            className="form__input-text"
            type="email"
            name="name"
            onChange={handleEmail}
          />{' '}
          {/* En esta línea indicamos que cuando cambie el input se ejecute la función manejadora handleEmail.  */}
        </label>
      </form>

      <p>Tu email es: {email}.</p>
      {/* usamos la constante email para pintar el HTML. */}
      <p>
        {/* usamos la constante email para pintar la propiedad href del link y para pintar el texto del link. */}
        Pulsa en <a href={`mailto:${email}`}>{email}</a> para enviar un email.
      </p>
    </div>
  );
};

export default App;
