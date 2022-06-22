import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Movie() {
  const { movieId } = useParams();
  return (
    <>
      <h2>The Movie {movieId}</h2>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="review">Review</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
