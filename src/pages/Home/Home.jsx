import { getMovies } from '../../getApi';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';
import { MoviesList } from '../../components/MoviesList/MoviesList';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getMoviesGallery() {
      setIsLoading(true);
      try {
        const topDayMovies = await getMovies();
        setMovies(topDayMovies.results);
      } catch {
        toast.error('Something went wrong, please try again! 🤷‍♂️🤷‍♀️🤷‍♂️');
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesGallery();
  }, []);

  console.log(movies);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={movies} location={location} />
      <Toaster />
    </main>
  );
};

export default Home;
