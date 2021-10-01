import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
//Services
import callToApi from '../services/api';
import ls from '../services/local-storage.js'; //localStorage
//Styles
import '../styles/App.scss';
//Components
import Header from './Header';
import Footer from './Footer';
import ProductDetail from './secondary-components/ProductDetail';
import NotFoundPage from './secondary-components/NotFoundPage';
import Input from './secondary-components/Input';
import ImageReader from './secondary-components/ImageReader';

function App() {
  const routeData = useRouteMatch('/product-detail/:id');
  const productId = routeData !== null ? routeData.params.productId : '';
  const [name, setName] = useState('Jud');
  const [image, setImage] = useState('');
  const handleChange = (result) => {
    if (result.name === 'name') {
      setName(result.value);
    }
  };

  const handleImage = (imageData) => {
    if (imageData) {
      setImage(imageData);
      // return <img src={image} alt="hey" />;
      // return <div style={backgroundImage:imageData } > </div>;
    } //else {
    //   return null;
    // }
  };
  const paintImage = () => {
    console.log('inside');
    if (image !== '') {
      return <img src={image} alt="hey" />;
    } else {
      return null;
    }
  };

  return (
    <div className="page">
      <Header productId="321" />{' '}
      {/* pendiente introducir numero id con find() tras callToApi */}
      <Switch>
        <Route path="/" exact>
          <div>
            <h1>Bienvenida a la pagina de inicio</h1>
            <p>Catálogo</p>
            <Input
              labelText={'Texto del Input '}
              inputName={'name'}
              handleChange={handleChange}
            />
            <ImageReader handleImage={handleImage} />
            <p>
              <strong>Mi nombre es asda </strong>
              {name}
            </p>
            {paintImage()}
          </div>
        </Route>
        <Route path="/product-detail/">
          <ProductDetail productId={productId} />
          <p>Detalle ruta</p>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
