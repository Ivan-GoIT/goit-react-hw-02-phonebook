import css from './PhoneBookForm.module.css';
export const PhoneBookForm = ({name,onSubmit,onChange}) => {
  return (
    <form className={css.formStyle} onSubmit={onSubmit}>
      <label>
        <p className={css.labelStyle}>Name</p>
        <input
          className={css.inputStyle}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChange}
        />
      </label>
      <button className={css.addButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
