import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../../getApi';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';

const Cast = () => {
  const { id } = useParams();
  const [moviesCast, setMoviesCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const posterLink = 'https://image.tmdb.org/t/p/w300';
  const noPoster =
    'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png';

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

  console.log(moviesCast);

  return (
    <main>
      {isLoading && <Loader />}
      <ul>
        {moviesCast.length === 0 && !isLoading ? (
          <h2>Sorry, there is no information here yet</h2>
        ) : (
          moviesCast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={profile_path ? posterLink + profile_path : noPoster}
                alt={name}
                loading="lazy"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        )}
      </ul>
      <Toaster />
    </main>
  );
};

export default Cast;
