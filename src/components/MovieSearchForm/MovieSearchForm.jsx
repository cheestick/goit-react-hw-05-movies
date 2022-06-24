import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { fetchMovieByName } from 'service/api';
import s from './MovieSearchForm.module.css';

export default function MovieSearchForm() {
  const [query, setQuery] = useSearchParams();
  const [searchRequest, setSearchReaquest] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();

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
    setSearchReaquest('');
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
        <ul>
          {searchResult.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
