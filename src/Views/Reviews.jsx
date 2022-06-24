import ReviewList from 'components/ReviewList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/api';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const data = await fetchMovieReviews(Number(movieId));
      setReviews(data.results);
    }

    fetchReviews();
  }, [movieId]);

  if (reviews.length < 1)
    return <p>We don't have any reviews for this movie</p>;

  return (
    <>
      <ReviewList reviews={reviews} />
    </>
  );
}
