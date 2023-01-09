import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMoviesDetails } from '../../getApi';
import { Loader } from '../../components/Loader/Loader';
import { BackLink } from '../../components/BackLink/BackLink';
import {
  Container,
  CardWrapper,
  Title,
  Link,
  Wrap,
  Item,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [moviesInfo, setMoviesInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const posterLink = 'https://image.tmdb.org/t/p/w300';
  const noPoster =
    'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

  useEffect(() => {
    async function getMovie() {
      setIsLoading(true);
      try {
        const details = await getMoviesDetails(id);
        setMoviesInfo(details);
      } catch {
        toast.error('Something went wrong, please try again! 🤷‍♂️🤷‍♀️🤷‍♂️');
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [id]);

  const { title, poster_path, release_date, overview, genres, vote_average } =
    moviesInfo;

  if (!title) {
    return;
  }

  return (
    <main>
      {isLoading && <Loader />}
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Container>
        <img
          src={poster_path ? posterLink + poster_path : noPoster}
          alt={title}
          loading="lazy"
        />
        <CardWrapper>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>
            <b>User Score:</b> {Math.round(vote_average * 10)}%
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </CardWrapper>
      </Container>
      <>
        <Title>Additional information</Title>
        <Wrap>
          <Item>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </Item>
          <Item>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </Item>
        </Wrap>
        <Toaster />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    </main>
  );
};

export default MoviesDetails;
