import { POSTER_URL } from 'service/api';
import s from './MovieCard.module.css';

export default function MovieCard({ movieInfo }) {
  return (
    <>
      <div className={s.info}>
        <img
          className={s.poster}
          src={`${POSTER_URL}${movieInfo.poster_path}`}
          alt={movieInfo.title}
        />
        <div className={s.overview}>
          <h2>
            {movieInfo.title} ({movieInfo.release_date?.slice(0, 4)})
          </h2>
          <p>
            User score: <span>{movieInfo.vote_average * 10}%</span>
          </p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <p>{movieInfo.genres?.map(g => g.name).join(', ')}</p>
        </div>
      </div>
    </>
  );
}
