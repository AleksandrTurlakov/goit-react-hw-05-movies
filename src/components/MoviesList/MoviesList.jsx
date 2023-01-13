import { Container, CardWrapper, MovieName } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
import { posterLink, noPosterFilm } from '../../getApi';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <main>
      <Container>
        {movies.map(movie => (
          <CardWrapper key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path
                    ? posterLink + movie.poster_path
                    : noPosterFilm
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
