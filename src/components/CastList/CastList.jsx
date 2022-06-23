import CastItem from 'components/CastItem';
import s from './CastList.module.css';

export default function CastList({ castList }) {
  return (
    <div className={s.container}>
      {castList
        ?.filter(({ profile_path }) => Boolean(profile_path))
        .map(({ id, name, profile_path, character }) => (
          <CastItem
            key={id}
            name={name}
            photo_path={profile_path}
            character={character}
          />
        ))}
    </div>
  );
}
