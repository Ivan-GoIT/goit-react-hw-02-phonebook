import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { Contacts } from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import { FilterByName } from 'components/FilterByName/FilterByName';

export class PhoneBookApp extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isContactInState = ({ name, number }) =>
    !!this.state.contacts.filter(({ name: prevName, number: prevNumber }) => {
      return prevName === name && prevNumber === number;
    }).length;

  handleSubmitForm = ({ name, number }) => {
    if (this.isContactInState({ name, number })) return;

    this.setState(({ contacts: prevContacts }) => ({
      contacts: [...prevContacts, { id: nanoid(), name, number }],
    }));
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterNormalize = filter => filter.toLowerCase();

  contactListToDisplay = (contacts, filter) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = this.filterNormalize(filter);
    const contactsToDisplay = this.contactListToDisplay(
      contacts,
      normalizedFilter
    );

    return (
      <>
        <Section title="Phonebook">
          <PhoneBookForm onSubmitForm={this.handleSubmitForm} />
        </Section>
        <Section>
          <FilterByName filter={filter} onChange={this.handleFilterChange} />
        </Section>
        <Section title="Contacts">
          <Contacts contactList={contactsToDisplay} />
        </Section>
      </>
    );
  }
}
