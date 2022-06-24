import PropTypes from 'prop-types';
import ReviewItem from 'components/ReviewItem';

export default function ReviewList({ reviews }) {
  return (
    <>
      {reviews.map(({ id, author, content }) => (
        <ReviewItem key={id} author={author} content={content} />
      ))}
    </>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
