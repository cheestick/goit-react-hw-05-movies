import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';

export function Movie() {
  const { movieId } = useParams();
  // const [movieInfo, setMovieInfo] = useState({})

  useEffect(() => {
    async function fetchMovieInfo() {
      const data = await fetchMovieDetails(movieId);
      console.log(data);
    }

    fetchMovieInfo();
  }, [movieId]);

  return (
    <>
      <h2>{movieId}</h2>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="review">Review</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
