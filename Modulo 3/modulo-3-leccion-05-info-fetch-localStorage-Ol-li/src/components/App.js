import '../styles/App.scss';
import { useEffect, useState } from 'react';
// import callToApiTwo from '../services/api2';
import { callToApi, callToApiTwo } from '../services/api.js';
import ls from '../services/local-storage.js'; //localStorage

function App() {
  // Estados--------------------------------------------------------------------
  const [starWarsData, setStarWarsData] = useState({});
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');

  // local storage--------------
  // //option1
  // const [name, setName] = useState(ls.get('name', '')); // Si hay datos en localStorage,al arrancar la página, los devolverá, sino devolverá un string vacío
  // const [email, setEmail] = useState(ls.get('email', ''));
  // //option2
  const [name, setName] = useState(ls.get('data', {}).name || '');
  //  Leemos la propiedad data y su valor por defecto es un objeto vacío, obtenemos de data objeto la propiedad name,si name existe la usamos, si no, usamos un string vacío
  const [email, setEmail] = useState(ls.get('data', {}).email || '');

  // useEffect con LocalStorage--------------------------------------------------
  useEffect(() => {
    // //option1
    // ls.set('name', name); //guardamos los datos
    // ls.set('email', email);
    // //option2
    ls.set('data', {
      // guardamos el objeto data con las propiedad name y email
      name: name,
      email: email,
    });
  }, [name, email]); // Cuando se renderice el HTML, se ejecutará useEffect

  //Llamar al API con useEffect--------------------------------------------------
  useEffect(() => {
    callToApi().then((response) => {
      // Dentro de useEffect llamamos al API
      setStarWarsData(response); // Cuando el API responde, guardamos en el estado
    });
  }, []); // Ponemos un array vacío para que se llame al API solo la primera vez
  useEffect(() => {
    // es posible poner código JS, p.ej. llamar a callToApi dentro de un if
    callToApiTwo(searchName).then((response) => {
      // Cuando el API responde guardamos los personajes en el estado
      setCharacters(response);
    });
    // Este useEffect depende de searchName por eso ponemos [searchName]
    // Cuando la usuaria cambia el searchName este useEffect se vuelve a ejecutar porque necesitamos llamar otra vez al API para obtener nuevos datos
  }, [searchName]);

  // Eventos----------------------------------------------------------------------------
  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const handleSearchName = (ev) => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchName(ev.target.value);
  };

  // Renderizado------------------------------------------------------------------------
  const renderCharacters = () => {
    // Pintamos el listado de personajes respondido por el API
    return characters.map((character, index) => {
      // El API no nos devuelve un id para cada personaje, por eso usamos el index que nos da el map
      return <li key={index}>Nombre: {character.name}</li>;
    });
  };

  //HTML----------------------------------------------------------------------------
  return (
    <div>
      <header>
        <h1 className="title">3.5 React Fetch and LocalStorage</h1>
      </header>
      <main>
        <ul>
          <ol>
            <h2>Hook useEffect</h2>
            <ul>
              <li>
                <h3>Llamar al API de Star Wars</h3>
                <ul>
                  <li>
                    <h4>Características de {starWarsData.name}</h4>
                    <ul>
                      <li>Año de nacimiento: {starWarsData.birthYear}</li>
                      <li>Estatura: {starWarsData.height} cm</li>
                      <li>Peso: {starWarsData.mass} Kg</li>
                      <li>Color de ojos: {starWarsData.eyeColor}</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Llamar al API de Star Wars2</h3>
                <form>
                  <label htmlFor="name">
                    Busca por el nombre de tu personaje favorito:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={searchName}
                    onChange={handleSearchName}
                  />
                </form>
                <h4>Personajes con el nombre: {searchName}</h4>
                <ul>{renderCharacters()}</ul>
              </li>
            </ul>
          </ol>
          <br />
          <ol>
            <h2>LocalStorage</h2>
            <form>
              <label htmlFor="name">Escribe tu nombre:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Maricarmen"
                value={name}
                onChange={handleName}
              />
              <label htmlFor="email">Escribe tu email:</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="mari.carmen@gmail.com"
                value={email}
                onChange={handleEmail}
              />
            </form>

            <h4>Tus datos son:</h4>
            <p>Tu nombre es: {name}</p>
            <p>Tu email es: {email}</p>
          </ol>
        </ul>
      </main>
    </div>
  );
}

export default App;
