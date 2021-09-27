import { useState } from 'react';
import Form from './Form';
import Preview from './Preview';
import ProductList from './ProductList';
import ModalWindow from './ModalWindow';
import Product from './Product';

const App = () => {
  const [email, setEmail] = useState('');

  // Creamos la función updateEmail que le vamos a pasar a la hija Form
  // El componente Form ejecutará esta función cuando la usuaria cambie el email
  const updateEmail = (email) => {
    // Cuando Form ejecute esta función nos pasará el email por parámetros
    // En esta función guardamos el email en el estado
    setEmail(email);
  };

  const addToCart = (productId) => {
    console.log('La usuaria quiere añadir a la cesta el producto:', productId);
  };

  return (
    <div>
      <h1>Generador de emails:</h1>
      <Form updateEmail={updateEmail} />
      <Preview email={email} />
      <section>
        <h1>Tienda de camisetas frikis</h1>
        <ProductList
          productId="349"
          imgSrc="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/react.jpg"
          name="Camiseta React JS"
          description="Camiseta para mujer de cuello ancho"
          addToCart={addToCart} //funcionsin ejecutar enviada a la hija para el Lifting
        />
      </section>
      <section>
        <h1>Jugando con ventanas modales</h1>
        <ModalWindow>
          <h1>Contenido de una ventana modal</h1>
        </ModalWindow>
        <ModalWindow showCloseButton title="Detalle del producto">
          <Product
            productId="349"
            imgSrc="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/react.jpg"
            name="Camiseta React JS"
            description="Camiseta para mujer de cuello ancho"
            addToCart={addToCart}
          />
        </ModalWindow>
      </section>
    </div>
  );
};

export default App;
