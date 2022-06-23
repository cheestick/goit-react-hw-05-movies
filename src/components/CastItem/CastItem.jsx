import { PHOTO_URL } from 'service/api';
import s from './CastItem.module.css';

export default function CastItem({ name, photo_path, character }) {
  return (
    <figure className={s.container}>
      <img className={s.photo} src={`${PHOTO_URL}${photo_path}`} alt={name} />
      <figcaption className={s.info}>
        <div>{name}</div>
        <div>
          Character: <span>{character}</span>
        </div>
      </figcaption>
    </figure>
  );
}
