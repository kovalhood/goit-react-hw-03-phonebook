import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({type, title }) => {
    return <button type={type} className={s.button}>{ title }</button>
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Button;