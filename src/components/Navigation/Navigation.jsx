import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <NavLink className={s.navlink} to="/">
        Home
      </NavLink>
      <NavLink className={s.navlink} to="movies">
        Movies
      </NavLink>
    </nav>
  );
}
