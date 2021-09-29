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
import ProductDetail from './/secondary-components/ProductDetail';
import NotFoundPage from './secondary-components/NotFoundPage';

function App() {
  const routeData = useRouteMatch('/product-detail/:id');
  const productId = routeData !== null ? routeData.params.productId : '';

  return (
    <div className="page">
      <Header productId="321" />{' '}
      {/* pendiente introducir numero id con find() tras callToApi */}
      <Switch>
        <Route path="/" exact>
          <h1>Bienvenida a la pagina de inicio</h1>
          <p>Catálogo</p>
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
