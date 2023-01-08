import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../getApi';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';

const Reviews = () => {
  const { id } = useParams();
  const [moviesReviews, setMoviesReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieReviews() {
      setIsLoading(true);
      try {
        const moviesReviews = await getMoviesReviews(id);
        setMoviesReviews(moviesReviews.results);
      } catch {
        toast.error('Something went wrong, please try again! 🤷‍♂️🤷‍♀️🤷‍♂️');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, [id]);

  console.log(moviesReviews);

  return (
    <main>
      {isLoading && <Loader />}
      <ul>
        {moviesReviews.length === 0 && !isLoading ? (
          <h2>We don't have any reviews for this movie</h2>
        ) : (
          moviesReviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
      <Toaster />
    </main>
  );
};

export default Reviews;
