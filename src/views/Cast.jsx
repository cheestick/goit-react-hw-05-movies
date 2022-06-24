import CastList from 'components/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'service/api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCredits() {
      const credits = await fetchMovieCredits(Number(movieId));
      setCast(credits.cast);
    }

    fetchCredits();
  }, [movieId]);

  return (
    <>
      <CastList castList={cast} />
    </>
  );
}
