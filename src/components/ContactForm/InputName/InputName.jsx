import PropTypes from 'prop-types';
import s from './InputName.module.css';

const InputName = ({ name, onNameChange}) => {
    return <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      placeholder='Enter name'
      value={name}
      onChange={onNameChange}
      className={s.input}
      // onKeyPress={(event) => {
      //   if (!/^[A-Za-z]+$/.test(event.key)) {
      //     event.preventDefault();
      //   }
      // }}
    />
}

InputName.propTypes = {
  name: PropTypes.string.isRequired,
}

export default InputName;