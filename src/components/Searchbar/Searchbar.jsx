import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './Searchbar.module.css';
// import PropTypes from 'prop-types';

export class Searchbar extends React.Component {
  state = {
    searchName: '',
  };

  handleNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();

    if (this.state.searchName.trim() === '') {
      toast.error('Enter a search query');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <Toaster autoClose={3000} />
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            name="name"
            value={this.state.searchName}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
