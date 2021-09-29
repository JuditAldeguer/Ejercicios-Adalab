import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import callToApi from '../services/api';
import ls from '../services/local-storage.js'; //localStorage
import ProductDetail from './ProductDetail';
import Links from './Links';

function App() {
  const routeData = useRouteMatch('/product-detail/:id');
  const productId = routeData !== null ? routeData.params.productId : '';

  return (
    <div className="page">
      <header>
        <h1 className="title">Starter Kit</h1>
        <Links />
      </header>
      <Switch>
        <Route exact path="/">
          <h1>Bienvenida a la pagina de inicio</h1>
          <p>Catálogo</p>
        </Route>
        <Route path="/product-detail/">
          <ProductDetail productId={productId} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
