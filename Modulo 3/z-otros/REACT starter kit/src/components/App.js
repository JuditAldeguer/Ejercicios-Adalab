import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid'; // al generar id={uuid()}
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
//Services
import callToApi from '../services/api';
import ls from '../services/local-storage.js'; //localStorage
import date from '../services/date'; //fecha usamos date: date.getCurrentDate()
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
