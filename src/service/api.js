const API_KEY = 'e594f8b0e830f95dbd764645df4a6e75';

const BASE_URL = 'https://api.themoviedb.org/3';

const TRENDING_URL = '/trending/movie/day';

export async function fetchTrendingMovies() {
  const response = await fetch(`${BASE_URL}${TRENDING_URL}?api_key=${API_KEY}`);
  if (!response.ok) throw new Error('Response is not OK!');
  return response.json();
}
