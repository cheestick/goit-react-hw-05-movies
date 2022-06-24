const API_KEY = 'e594f8b0e830f95dbd764645df4a6e75';

const BASE_URL = 'https://api.themoviedb.org/3';

const TRENDING_URL = '/trending/movie/day';
const MOVIES_URL = '/movie';
const CREDITS_URL = '/credits';
const REVIEWS_URL = '/reviews';
const SEARCH_URL = '/search';

export const POSTER_URL = 'https://image.tmdb.org/t/p/w342';
export const PHOTO_URL = 'https://image.tmdb.org/t/p/w154';

export async function fetchTrendingMovies() {
  const response = await fetch(`${BASE_URL}${TRENDING_URL}?api_key=${API_KEY}`);
  if (!response.ok) throw new Error('Trending movies response is not OK!');
  return response.json();
}

export async function fetchMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}${MOVIES_URL}/${movieId}?api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error('Movie details response is not OK!');
  return response.json();
}

export async function fetchMovieCredits(movieId) {
  const response = await fetch(
    `${BASE_URL}${MOVIES_URL}/${movieId}${CREDITS_URL}?api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error('Movie credits response is not OK!');
  return response.json();
}

export async function fetchMovieReviews(movieId) {
  const response = await fetch(
    `${BASE_URL}${MOVIES_URL}/${movieId}${REVIEWS_URL}?api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error('Movie reviews response is not OK!');
  return response.json();
}

export async function fetchMovieByName(movieTitle) {
  const response = await fetch(
    `${BASE_URL}${SEARCH_URL}${MOVIES_URL}?api_key=${API_KEY}&query=${movieTitle}`
  );
  if (!response.ok) throw new Error('Movie search error!');
  return response.json();
}
