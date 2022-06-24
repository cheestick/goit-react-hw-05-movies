import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';
import MovieCard from 'components/MovieCard';
import s from './MovieDetails.module.css';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovieInfo() {
      const data = await fetchMovieDetails(movieId);
      setMovieInfo(data);
    }
    fetchMovieInfo();
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      <button
        className={s.backbutton}
        type="button"
        onClick={() => navigate(location.state?.from || '/')}
      >
        Go back
      </button>
      <MovieCard movieInfo={movieInfo} />
      <div className={s.additional}>
        <h2>Additional information</h2>
        <nav className={s.extraNavigation}>
          <NavLink
            className={s.extralink}
            to="cast"
            state={location.state && { from: location.state.from }}
          >
            Cast
          </NavLink>
          <NavLink
            className={s.extralink}
            to="review"
            state={location.state && { from: location.state.from }}
          >
            Review
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
