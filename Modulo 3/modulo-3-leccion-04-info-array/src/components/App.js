import { useState } from 'react';
import '../styles/App.scss';

const App = () => {
  //adalabers
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

  //series-----
  const [series, setSeries] = useState([
    { id: '123', isFavorite: false, name: 'Juego de tronos' },
    { id: '456', isFavorite: true, name: 'Las chicas Gilmore' },
    { id: '678', isFavorite: false, name: 'Gambita de Dama' },
  ]);
  const [searchName, setSearchName] = useState('');
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);
  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    foundSerie.isFavorite = !foundSerie.isFavorite; // Invertimos la propiedad de serie pintada, si antes era false ahora es true y viceversa
    setSeries([...series]); // Guardamos las series en el estado usando spread (solo cambia lo nuevo)
  };
  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchIsFavorite = (ev) => {
    setSearchIsFavorite(ev.target.checked);
  };
  const renderSeries = () => {
    return (
      series
        // Filtramos por nombre
        .filter((serie) => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        // Filtramos por favorito
        .filter((serie) => {
          if (searchIsFavorite === true) {
            return serie.isFavorite === true;
          } else {
            return true;
          }
        })
        // Mapeamos
        .map((serie) => {
          return (
            <li key={serie.id} id={serie.id} onClick={handleFavorite}>
              <h2>{serie.name}</h2>
              <p>Es mi serie favorita: {serie.isFavorite ? 'Sí' : 'No'}</p>
            </li>
          );
        })
    );
  };

  //shipping
  const [shipping, setShipping] = useState({});
  const handleAddress = (ev) => {
    shipping.address = ev.target.value;
    setShipping({ ...shipping });
  };
  const handleCity = (ev) => {
    shipping.city = ev.target.value;
    setShipping({ ...shipping });
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">3.4 Arrays</h1>
      </header>
      <main>
        <section>
          <h2>Lista de Adalabers</h2>
          <ul>{renderAdalabers()}</ul>
        </section>
        <section>
          <h2>Lista de Series favoritas: </h2>
          <ul>{renderSeries()}</ul>
          <form>
            <label htmlFor="searchName">Buscar por nombre de serie</label>
            <input
              type="text"
              id="searchName"
              value={searchName}
              onChange={handleSearchName}
            />
            <label htmlFor="searchIsFavorite">Mostrar solo las favoritas</label>
            <input
              type="checkbox"
              id="searchIsFavorite"
              checked={searchIsFavorite}
              onChange={handleSearchIsFavorite}
            />
          </form>
        </section>
        <section>
          <h1>Indica tu dirección para el envío:</h1>
          <form>
            <label htmlFor="address">Indica tu dirección postal:</label>
            <input
              type="text"
              id="address"
              value={shipping.address}
              onChange={handleAddress}
            />
            <label htmlFor="city">Indica tu ciudad:</label>
            <input
              type="text"
              id="city"
              value={shipping.city}
              onChange={handleCity}
            />
          </form>
          <p>
            Te lo vamos a enviar a la dirección{' '}
            <strong>{shipping.address}</strong> en la ciudad
            <strong> {shipping.city}</strong>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
