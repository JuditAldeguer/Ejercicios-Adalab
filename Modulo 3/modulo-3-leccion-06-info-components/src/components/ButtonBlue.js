//imports de variables Sass, imagenes...

const ButtonBlue = (props) => {
  // Comprobamos si nos pasan la prop type
  // - Si nos la pasan typeClassName será button-type-xl
  // - Si no nos la pasa typeClassName será un string vacío
  const typeClassName =
    props.type === undefined ? '' : `button-type-${props.type}`;

  // Usamos typeClassName para añadir otra clase al botón
  return (
    <button className={`bg_blue ${typeClassName}`} title={props.title}>
      {props.text}
    </button>
  );
};

export default ButtonBlue;
