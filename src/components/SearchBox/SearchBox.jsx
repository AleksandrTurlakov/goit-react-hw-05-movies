import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import {
  SearchForm,
  SearchFormInput,
  Icon,
  SearchFormButton,
} from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit }) => {
  const [moviesName, setMoviesName] = useState('');

  const handleMoviesNameChange = e => {
    setMoviesName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (moviesName.trim() === '') {
      toast.error('Enter text in the search box! 👀');
      return;
    }
    onSubmit(moviesName);
    setMoviesName('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        name="moviesName"
        value={moviesName}
        onChange={handleMoviesNameChange}
        placeholder="Search movies"
      />
      <SearchFormButton type="submit">
        <Icon />
      </SearchFormButton>
      <Toaster />
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
