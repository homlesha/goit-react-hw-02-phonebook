import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSaveContact = data => {
    const { name, number } = data;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${name} is already in contacts list`);
      return;
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts list`);
      return;
    } else {
      this.setState(({ contacts }) => {
        return {
          contacts: [...contacts, contact],
        };
      });
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = IdContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== IdContact),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.handleSaveContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={this.getContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
