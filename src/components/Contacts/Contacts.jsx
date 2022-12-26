export const Contacts = ({ contactList = [] }) => (
  <ul>
    {contactList.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
    ))}
  </ul>
);
