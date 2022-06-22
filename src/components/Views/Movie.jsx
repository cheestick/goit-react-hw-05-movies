import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';

export function Movie() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    async function fetchMovieInfo() {
      const data = await fetchMovieDetails(movieId);
      setMovieInfo(data);
      console.log(data);
    }

    fetchMovieInfo();
  }, [movieId]);

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt={movieInfo.title}
      />
      <h2>
        {movieInfo.title} ({movieInfo.release_date?.slice(0, 4)})
      </h2>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="review">Review</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
