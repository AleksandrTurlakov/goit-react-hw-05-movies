import toast, { Toaster } from 'react-hot-toast';
import {
  SearchForm,
  SearchFormInput,
  Icon,
  SearchFormButton,
} from './SearchBox.styled';

export const SearchBox = ({ onSubmit, moviesName }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const moviesSearchName = e.currentTarget.moviesName.value
      .toLowerCase()
      .trim();
    console.log(moviesSearchName);

    if (moviesSearchName === '') {
      toast.error('Enter text in the search box! 👀');
      return;
    }
    onSubmit(moviesSearchName);
    e.currentTarget.reset();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        name="moviesName"
        defaultValue={moviesName}
        // onChange={handleMoviesNameChange}
        placeholder="Search movies"
      />
      <SearchFormButton type="submit">
        <Icon />
      </SearchFormButton>
      <Toaster />
    </SearchForm>
  );
};
