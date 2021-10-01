//Styless
import '../styles/layout/header.scss';
//Components
import Links from './secondary-components/Links';

const Header = (props) => {
  const handleBackBtn = (ev) => {
    ev.preventDefault();
    window.history.back();
  };

  return (
    <header>
      <h1 className="title">Modulo 3-09 Buenas prácticas</h1>
      <Links productId={props.productId} />
      <button title="atrás" onClick={handleBackBtn}>
        Volver atrás
      </button>
    </header>
  );
};

export default Header;
