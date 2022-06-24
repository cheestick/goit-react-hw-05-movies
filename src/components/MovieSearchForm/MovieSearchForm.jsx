import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'service/api';
import s from './MovieSearchForm.module.css';

export default function MovieSearchForm() {
  const [query, setQuery] = useSearchParams();
  const [searchRequest, setSearchReaquest] = useState(
    () => query.get('query') ?? ''
  );

  const location = useLocation();
  console.log(location);

  async function onSubmit(e) {
    e.preventDefault();
    console.log(query.toString());
    setQuery({ query: searchRequest });
    const res = await fetchMovieByName(searchRequest);
    console.log(res);
    setSearchReaquest('');
  }

  return (
    <form className={s.form} onSubmit={onSubmit} autoComplete="off">
      <input
        type="text"
        name="search"
        value={searchRequest}
        onChange={({ target }) => setSearchReaquest(target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
