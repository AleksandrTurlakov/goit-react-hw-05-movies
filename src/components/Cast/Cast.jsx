import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast, posterLink, noPoster } from '../../getApi';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';
import { Container, CardWrapper, Name } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [moviesCast, setMoviesCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieActors() {
      setIsLoading(true);
      try {
        const moviesActors = await getMoviesCast(id);
        setMoviesCast(moviesActors.cast);
      } catch {
        toast.error('Something went wrong, please try again! 🤷‍♂️🤷‍♀️🤷‍♂️');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieActors();
  }, [id]);

  return (
    <main>
      {isLoading && <Loader />}
      <Container>
        {moviesCast.length === 0 && !isLoading ? (
          <h2>Sorry, there is no information here yet</h2>
        ) : (
          moviesCast.map(({ id, profile_path, name, character }) => (
            <CardWrapper key={id}>
              <img
                src={profile_path ? posterLink + profile_path : noPoster}
                alt={name}
                loading="lazy"
              />
              <Name>{name}</Name>
              <p>
                <b>Character:</b> {character}
              </p>
            </CardWrapper>
          ))
        )}
      </Container>
      <Toaster />
    </main>
  );
};

export default Cast;
