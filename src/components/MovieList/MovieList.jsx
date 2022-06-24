import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ title, items }) {
  const location = useLocation();
  const path = location.pathname === '/' ? 'movies/' : '';

  return (
    <>
      {title && <h2>{title}</h2>}
      {items && (
        <ul>
          {items.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${path}${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
