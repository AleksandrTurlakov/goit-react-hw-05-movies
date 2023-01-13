import axios from 'axios';

export const posterLink = 'https://image.tmdb.org/t/p/w300';
export const noPoster =
  'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png';
export const noPosterFilm =
  'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `9305dc9ad534282c491ff880c3535cd7`;
const MEDIA_TYPE = `movie`;
const TIME_WINDOW = `day`;

export const getMovies = async () => {
  const searchQuery = `${BASE_URL}/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${KEY}`;
  const response = await axios.get(searchQuery);
  return response.data;
};

export const getMoviesDetails = async id => {
  const searchQuery = `${BASE_URL}/${MEDIA_TYPE}/${id}?api_key=${KEY}&language=en-US`;
  const response = await axios.get(searchQuery);
  return response.data;
};

export const getMoviesCast = async id => {
  const searchQuery = `${BASE_URL}/${MEDIA_TYPE}/${id}/credits?api_key=${KEY}&language=en-US`;
  const response = await axios.get(searchQuery);
  return response.data;
};

export const getMoviesReviews = async id => {
  const searchQuery = `${BASE_URL}/${MEDIA_TYPE}/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  const response = await axios.get(searchQuery);
  return response.data;
};

export const getMoviesSearch = async moviesName => {
  const searchQuery = `${BASE_URL}/search/${MEDIA_TYPE}?api_key=${KEY}&language=en-US&query=${moviesName}&page=1&include_adult=false`;
  const response = await axios.get(searchQuery);
  return response.data;
};
