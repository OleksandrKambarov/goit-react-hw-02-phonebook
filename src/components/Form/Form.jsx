import React, { Component } from 'react';
import styles from './form.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.form__label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Імя може складатись тільки з букв, апострофа, тире і пробілів. Наприклад: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan і т. д."
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.form__label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            placeholder="Enter number"
            // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона повинен складатись з цифр 11-12 може містити пробіли, тире, пузаті дужки і може починатися з +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.form__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
