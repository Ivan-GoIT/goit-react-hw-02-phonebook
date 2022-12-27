import css from './Contact.module.css';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
    
  const handleClick = () => onDelete(id);

  return (
    <li className={css.listItem}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};
