import { getMovies } from '../../getApi';
import toast from 'react-hot-toast';
import { Container, CardWrapper, MovieName } from './Home.styled';
import { Loader } from '../../components/Loader/Loader';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const posterLink = 'https://image.tmdb.org/t/p/w300';
  const noPoster =
    'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getMoviesGallery() {
      setIsLoading(true);
      try {
        const topDayMovies = await getMovies();
        setMovies(topDayMovies.results);
      } catch (error) {
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
      <Container>
        {movies.map(movie => (
          <CardWrapper key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path ? posterLink + movie.poster_path : noPoster
                }
                alt={movie.title}
                loading="lazy"
              />
              <MovieName>{movie.title}</MovieName>
            </Link>
          </CardWrapper>
        ))}
      </Container>
    </main>
  );
};

export default Home;
