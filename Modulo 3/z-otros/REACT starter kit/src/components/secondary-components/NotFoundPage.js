import ModalWindow from './ModalWindow';
import '../../styles/components/notFoundPage.scss';

const NotFoundPage = () => {
  return (
    <main className="not_found_page">
      <h2>ERROR: La pagina que buscas no existe</h2>
      <p>
        Revisa que la dirección de la página
        <span className="cursiva"> (url)</span> sea correcta.
      </p>
      <ModalWindow />
    </main>
  );
};
export default NotFoundPage;
