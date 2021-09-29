import { Link, NavLink } from 'react-router-dom';

const Links = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Ir al inicio</Link>
        </li>
        <li>
          <NavLink
            to={`/product-detail/${props.productId}`}
            activeClassName="selected-link"
          >
            Ir al Producto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
