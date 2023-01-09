import { getMovies } from '../../getApi';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';
import { MoviesList } from '../../components/MoviesList/MoviesList';

import { useEffect, useState } from 'react';

const Home = () => {
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

  return (
    <main>
      <h1 style={{ marginBottom: '10px' }}>Trending today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
      <Toaster />
    </main>
  );
};

export default Home;
