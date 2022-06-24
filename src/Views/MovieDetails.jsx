import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';
import MovieCard from 'components/MovieCard';
import s from './MovieDetails.module.css';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    async function fetchMovieInfo() {
      const data = await fetchMovieDetails(movieId);
      setMovieInfo(data);
    }
    fetchMovieInfo();
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      <MovieCard movieInfo={movieInfo} />
      <div className={s.additional}>
        <h2>Additional information</h2>
        <nav>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="review">Review</NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
