import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('____');
  const handleName = (ev) => {
    if (ev.target.value !== '') {
      setName(ev.target.value);
    } else {
      setName('____');
    }
  };

  const [size, setSize] = useState('S');
  const handleSize = (ev) => {
    setSize(ev.target.value);
  };

  const [giftWrap, setGiftWrap] = useState(false);
  const handleGiftWrap = (ev) => {
    setGiftWrap(ev.target.checked);
  };

  const [size2, setSize2] = useState('');
  const handleSize2 = (ev) => {
    setSize2(ev.target.value);
  };

  const handleSubmit = (ev) => {
    debugger;
    ev.preventDefault();
    // Aquí enviamos los datos al servidor con un fetch o lo que sea
  };
  return (
    <div>
      <header>
        <h1 className="title">Formularios en React</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Escribe un nombre: </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="María García"
              onChange={handleName}
            />
            <p>Tu nombre es: {name}</p>
          </fieldset>
          <fieldset>
            <label htmlFor="size">Selecciona tu talla de camiseta:</label>
            <select name="size" id="size" onChange={handleSize}>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <p>Tu talla de camiseta es: {size}.</p>
          </fieldset>
          <fieldset>
            <label htmlFor="giftWrap">
              ¿Quieres envolver para regalo tu compra?
            </label>
            <input
              type="checkbox"
              name="gitWrap"
              id="gitWrap"
              onChange={handleGiftWrap}
            />
            <p>
              {giftWrap === true ? 'OK,' : 'OK, entonces NO'} te lo envolveremos
              para regalo
            </p>
          </fieldset>
          <fieldset>
            <label htmlFor="size">Selecciona tu talla de camiseta:</label>
            <label htmlFor="sizeS"> Talla S</label>
            <input
              type="radio"
              id="sizeS"
              name="size"
              value="la talla S"
              onChange={handleSize2}
            />
            <label htmlFor="sizeM"> Talla M</label>
            <input
              type="radio"
              id="sizeM"
              name="size"
              value="la talla M"
              onChange={handleSize2}
            />
            <label htmlFor="sizeL"> Talla L</label>
            <input
              type="radio"
              id="sizeL"
              name="size"
              value="la talla L"
              onChange={handleSize2}
            />
            <p>Tu talla de camiseta es: {size2}</p>
          </fieldset>
          <fieldset>
            <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default App;
