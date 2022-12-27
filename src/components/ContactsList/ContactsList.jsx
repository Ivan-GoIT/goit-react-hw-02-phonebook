import { Contact } from './Contact/Contact';
import css from './ContactsList.module.css';
export const ContactsList = ({ contactList = [], onDelete }) => (
  <ul className={css.contactsList}>
    {contactList.map(item => (
      <Contact key={item.id} contact={item} onDelete={onDelete} />
    ))}
  </ul>
);
