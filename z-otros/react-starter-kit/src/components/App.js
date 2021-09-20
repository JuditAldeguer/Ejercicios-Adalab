import '../styles/App.scss';
import happyFace from '../images/happyFace.jpeg';

function App() {
  return (
    <div>
      <header>
        <h1 className="title">Título de mi página</h1>
      </header>
      {/* comentario */}
      <img src={happyFace} alt="Happy face" title="Happy" />
      <img
        src="https://beta.adalab.es/resources/images/adalab-logo-128x128.png"
        title="Página de Adalab"
        alt="Logo de Adalab"
      />
    </div>
  );
}

export default App;
