import React from "react";
import PropTypes from "prop-types";
import "./ContactItem.scss";

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
    <li className="contact-item">
      <span>{name} - {number}</span>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </li>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
