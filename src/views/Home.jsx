import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {queryResult.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
