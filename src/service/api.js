const API_KEY = 'e594f8b0e830f95dbd764645df4a6e75';

const BASE_URL = 'https://api.themoviedb.org/3';

const TRENDING_URL = '/trending/movie/day';
const MOVIES_URL = '/movie';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export async function fetchTrendingMovies() {
  const response = await fetch(`${BASE_URL}${TRENDING_URL}?api_key=${API_KEY}`);
  if (!response.ok) throw new Error('Trending movies response is not OK!');
  return response.json();
}

export async function fetchMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}${MOVIES_URL}/${movieId}?api_key=${API_KEY}&append_to_response=credits,reviews`
  );
  if (!response.ok) throw new Error('Movie details response is not OK!');
  return response.json();
}
