import { Component } from "react";
import PropTypes from "prop-types";
import "./ContactForm.scss";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="number">Phone number</label>
        <input
          id="number"
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
