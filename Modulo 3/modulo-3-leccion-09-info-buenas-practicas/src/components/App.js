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

function App() {
  const routeData = useRouteMatch('/product-detail/:id');
  const productId = routeData !== null ? routeData.params.productId : '';
  const [name, SetName] = useState('Jud');
  const handleChange = (result) => {
    if (result.name === 'name') {
      SetName(result.value);
    }
  };

  return (
    <div className="page">
      <Header productId="321" />{' '}
      {/* pendiente introducir numero id con find() tras callToApi */}
      <Switch>
        <Route path="/" exact>
          <h1>Bienvenida a la pagina de inicio</h1>
          <p>Catálogo</p>
          <Input
            labelText={'Texto del Input '}
            inputName={'name'}
            handleChange={handleChange}
          />
          <p>
            <strong>Mi nombre es </strong>
            {name}
          </p>
        </Route>
        <Route path="/product-detail/">
          <ProductDetail productId={productId} />
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
