//importar las propTypes
import PropTypes from 'prop-types';

const Input = (props) => {
  const handleInput = (ev) => {
    props.handleChange({
      name: props.inputName,
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        id={props.id}
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={handleInput}
      />
    </>
  );
};
// Estas son las defalutProps
Input.defaultProps = {
  inputType: 'text',
  placeholder: 'Escribe aqui...',
};

// Estas son las propTypes
Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
