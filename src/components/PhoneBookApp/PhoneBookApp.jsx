import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { Contacts } from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';

export class PhoneBookApp extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmitForm = ({ name, number }) => {
    this.setState(({ contacts: prevContacts, }) => ({
      contacts: [...prevContacts, { id: nanoid(), name, number }],
      name,
      number,
    }));
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <PhoneBookForm
            name={name}
            number={number}
            onSubmit={this.handleSubmitForm}
          />
        </Section>
        <Section title="Contacts">
          <Contacts contactList={contacts} />
        </Section>
      </>
    );
  }
}
