import css from'./PhoneBookApp.module.css';
import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import { Contacts } from 'components/Contacts/Contacts';

export class PhoneBookApp extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  render() {
    const { contacts,name }=this.state;
    return (
      <>
        <Section title='Phonebook' >
          <PhoneBookForm/>
        </Section>
        <Section title='Contacts'>
          <Contacts contactList={contacts}/>
        </Section>
      </>
    );
  }
}

