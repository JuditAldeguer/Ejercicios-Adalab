import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/App.scss';
import NotFoundPage from './NotFoundPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import Product from './Product';

const App = () => {
  // Con el hook useRouteMatch compruebo si la ruta actual coincide con /product/:productId
  const routeData = useRouteMatch('/product/:productId');
  // Si no coincide, routeData es null
  // Si sí coincide, routeData es un objeto con mucha información útil
  // La información que me interesa está en routeData.params.productId
  const productId = routeData !== null ? routeData.params.productId : '';
  console.log(routeData);
  console.log(productId);

  return (
    <div>
      <header>
        <h1>Modulo 3.08 - Router</h1>
      </header>
      <section>
        <h2>Sección 1 - siempre aparece</h2>
        <Route path="/contacto">
          <h3>
            Este título solo aparece cuando la usuaria entra en la página de
            contacto
          </h3>
        </Route>
        <Route path="/contacto/ejemplo">
          <h4>Ejemplo dentro de contacto</h4>
        </Route>
        <Route path="/faq">
          <h3>FAQS. Preguntas y consultas</h3>
        </Route>
        <Route path="/faq2">
          <h3>FAQS-2. Preguntas y consultas</h3>
          <p>Doble</p>
        </Route>
        <nav>
          <ul>
            <li>
              <Link to="/">Ir al inicio</Link>
            </li>
            <li>
              <Link to="/contacto">Ir a contacto</Link>
            </li>
            <li>
              <Link to="/contacto/ejemplo">Ejemplo en contact</Link>
            </li>
            <li>
              {/* añade clase con estilos en Sass al activarse */}
              <NavLink to="/faq" activeClassName="selectedLink">
                FAQs
              </NavLink>
            </li>
            <li>
              {/* añade estilos al activarse */}
              <NavLink
                to="/faq2"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
              >
                FAQs2
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2>Sección 2 - aparece siempre!!!</h2>

        <Route path="/contactoo/formulario">
          <h3>Página del formulario de contacto</h3>
        </Route>

        <Route exact path="/contactoo">
          <h4>Página de contactoo</h4>
        </Route>

        <nav>
          <ul>
            <li>
              <Link to="/">Ir al inicio2</Link>
            </li>
            <li>
              <Link to="/contactoo">Ir a contactoo</Link>
            </li>
            <li>
              <Link to="/contactoo/formulario">
                Ir al formulario de contactoo
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2>Sección 2 - aparece siempre!!!</h2>
        <Switch>
          <Route path="/contactooo/formulario">
            <h4>Página del formulario de contacto 3</h4>
          </Route>

          <Route path="/contactooo">
            <h3>Página de contacto 3</h3>
          </Route>
        </Switch>

        <nav>
          <ul>
            <li>
              <Link to="/">Ir al inicio</Link>
            </li>
            <li>
              <Link to="/contactooo">Ir a contacto 3</Link>
            </li>
            <li>
              <Link to="/contactooo/formulario">
                Ir al formulario de contacto 3
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        {/* Cómo llamar a diferentes paginas y si no esta bien escrita la url, informar que da error */}
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>

          <Route path="/contact-page">
            <ContactPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        <nav>
          <ul>
            <li>
              <Link to="/home">Ir a pagina Home</Link>
            </li>
            <li>
              <Link to="/contact-page">Ir a contacto page</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2>Tienda virtual de móviles</h2>
        <nav>
          <ul>
            <li>
              <Link to="/tienda">Inicio Tienda</Link>
            </li>
            <li>
              <Link to="/contact-tienda">Contacto</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/tienda">
            <h2>Página de inicio</h2>
          </Route>

          <Route path="/contact-tienda">
            <h2>Página de contacto</h2>
          </Route>

          <Route path="/products">
            <h2>Catálodo de móviles</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/product/43823">Ver detalle del iPhone</Link>
                </li>
                <li>
                  <Link to="/product/345565">Ver detalle del Nokia</Link>
                </li>
              </ul>
            </nav>
          </Route>

          {/* Con este path declararmos una ruta dinámica */}
          <Route path="/product/:productId">
            {/* Cuando la usuaria entre en /product/43823 o en /product/345565 se motrará este contenido  */}
            <h2>Detalle de un móvil</h2>
            <Product />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;
