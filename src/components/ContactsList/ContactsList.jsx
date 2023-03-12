import React from 'react';

import {
  ContactList,
  ContactItem,
  ContactText,
  ContactLink,
  ContactButton,
} from './ContactsList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactText>{name}:</ContactText>
          <ContactLink href="/">{number}</ContactLink>
          <ContactButton
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
