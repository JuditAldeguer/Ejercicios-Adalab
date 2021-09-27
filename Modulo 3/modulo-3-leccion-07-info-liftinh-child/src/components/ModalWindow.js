import { useState } from 'react';
import '../styles/ModalWindow.scss';

const ModalWindow = (props) => {
  //estates
  const [hidden, setHidden] = useState('modal_window');

  //functions
  const handleButtonX = (ev) => {
    debugger;
    ev.preventDefault();
    setHidden('hidden');
  };

  return (
    <section className={hidden}>
      <button className="buttonX" onClick={handleButtonX}>
        x
      </button>
      <p>Esto es una ventana modal</p>
      {props.title}
      {props.children}
      {/* contenido  html metido en App.js entre las etiquetas del componente - h1 */}
    </section>
  );
};

export default ModalWindow;
