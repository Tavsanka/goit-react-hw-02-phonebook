import React from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import "./ContactList.scss";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
    <ul className="list">
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} onDelete={() => onDeleteContact(id)}/>
      ))}
    </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
