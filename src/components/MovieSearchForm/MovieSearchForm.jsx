import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'service/api';
import s from './MovieSearchForm.module.css';

export default function MovieSearchForm() {
  const [query, setQuery] = useSearchParams();
  const [searchRequest, setSearchReaquest] = useState(query.get('query') || '');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function fetchMovie(movieTitle) {
      const res = await fetchMovieByName(movieTitle);
      setSearchResult(res.results);
    }
    const prevQuery = query.get('query');
    if (!prevQuery) return;
    fetchMovie(prevQuery);
  }, [query]);

  function onSubmit(e) {
    e.preventDefault();
    if (!searchRequest) return;
    setQuery({ query: searchRequest });
  }

  return (
    <>
      <form className={s.form} onSubmit={onSubmit} autoComplete="off">
        <input
          type="text"
          name="search"
          value={searchRequest}
          onChange={({ target }) => setSearchReaquest(target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchResult.length > 0 && (
        <MovieList title="Search results" items={searchResult} />
      )}
    </>
  );
}
