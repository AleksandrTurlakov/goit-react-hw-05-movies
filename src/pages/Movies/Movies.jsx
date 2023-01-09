import { getMoviesSearch } from '../../getApi';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;
    async function getMoviesSearchQueryy() {
      setIsLoading(true);
      try {
        const searchMovies = await getMoviesSearch(searchQuery);
        setMovies(searchMovies.results);
      } catch {
        toast.error('Something went wrong, please try again! 🤷‍♂️🤷‍♀️🤷‍♂️');
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesSearchQueryy();
  }, [searchQuery]);

  const onSubmit = moviesName => {
    setSearchParams(moviesName !== '' ? { query: moviesName } : {});
  };

  return (
    <main>
      <SearchBox onSubmit={onSubmit} moviesName={searchQuery} />
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
