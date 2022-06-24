import PropTypes from 'prop-types';
import { POSTER_URL } from 'service/api';
import s from './MovieCard.module.css';

export default function MovieCard({ movieInfo }) {
  const { poster_path, title, release_date, vote_average, genres, overview } =
    movieInfo;
  return (
    <>
      <div className={s.info}>
        <img
          className={s.poster}
          src={`${POSTER_URL}${poster_path}`}
          alt={title}
        />
        <div className={s.overview}>
          <h2>
            {title} ({release_date?.slice(0, 4)})
          </h2>
          <p>
            User score: <span>{vote_average * 10}%</span>
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(g => g.name).join(', ')}</p>
        </div>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
