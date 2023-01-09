import { Container, CardWrapper, MovieName } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const posterLink = 'https://image.tmdb.org/t/p/w300';
  const noPoster =
    'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

  return (
    <main>
      <Container>
        {movies.map(movie => (
          <CardWrapper key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
