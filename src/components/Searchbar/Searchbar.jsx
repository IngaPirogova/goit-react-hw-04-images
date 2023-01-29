import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
       toast.error('Enter a search query');
       return;
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={css.Searchbar}>
      <Toaster autoClose={3000} />
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={css.searchForm_input}
          type="text"
          name="name"
          value={searchName}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
