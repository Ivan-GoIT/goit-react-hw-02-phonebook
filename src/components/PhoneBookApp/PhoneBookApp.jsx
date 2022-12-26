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

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.setState(({ contacts, name, number }) => {
      contacts.push({ id: nanoid(), name, number });
    });
    this.setState({ name: '', number: '' });
  };

  handleCanngeInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
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
            onChange={this.handleCanngeInput}
          />
        </Section>
        <Section title="Contacts">
          <Contacts contactList={contacts} />
        </Section>
      </>
    );
  }
}
