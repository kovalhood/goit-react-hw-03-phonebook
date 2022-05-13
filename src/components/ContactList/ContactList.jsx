import s from './ContactList.module.css';

const ContactList = ({ data, filterName, onDeleteContact }) => {
    return <ul className={s.contacts}>
      {data.filter(({name}) => name.toLowerCase().includes(filterName.trim())).map(({id, name, number}) => (
        <li key={id} className={s.item}>
          <div>
            <p className={s.name}>{name}</p>
            <p className={s.number}>{number}</p>
          </div>
          <button type='button'
            onClick={() => onDeleteContact(id)}
            className={s.delete}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
      </li>
    ))}
  </ul>
}

export default ContactList;