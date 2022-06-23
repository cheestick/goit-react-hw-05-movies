import s from './ReviewItem.module.css';

export default function ReviewItem({ author, content }) {
  return (
    <div className={s.wrapper} tabIndex="10">
      <p className={s.author}>Author: {author}</p>
      <p className={s.content}>{content}</p>
    </div>
  );
}
