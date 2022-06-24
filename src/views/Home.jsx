import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'service/api';

export default function Home() {
  const [queryResult, setQueryResult] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await fetchTrendingMovies();
      setQueryResult(data.results);
    }

    fetchMovies();
  }, []);

  return <MovieList title="Trending today" items={queryResult} />;
}
