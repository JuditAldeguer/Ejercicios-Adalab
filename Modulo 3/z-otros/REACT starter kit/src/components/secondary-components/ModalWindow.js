import { useState } from 'react';
import '../../styles/components/modal_window.scss';

const ModalWindow = (props) => {
  //estates
  const [classtoShow, setClasstoShow] = useState('');

  //functions
  const handleButtonX = (ev) => {
    ev.preventDefault();
    setClasstoShow('hidden');
  };

  return (
    <section className={`modal_window`} id={classtoShow}>
      <button className={`buttonX`} onClick={handleButtonX}>
        x
      </button>
      <h2>ERROR: La pagina que buscas no existe</h2>
      <p>
        Clica en el botón X para salir y revisa que la dirección de la página
        <span className="cursiva"> (url)</span> sea correcta.
      </p>
      {props.title}
      {props.children}
      {/* contenido  html metido en App.js entre las etiquetas del componente - h1 */}
    </section>
  );
};

export default ModalWindow;
