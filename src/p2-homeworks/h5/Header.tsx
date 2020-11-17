import React from "react";
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

function Header() {
  return (
      <div className={s.navbarList}>
        <div className={s.navbarItem}>
          <NavLink to='/pre-junior' activeClassName={s.activeLink}>Pre-Junior</NavLink>
        </div>
        <div className={s.navbarItem}>
          <NavLink to='/junior' activeClassName={s.activeLink}>Junior</NavLink>
        </div>
        <div className={s.navbarItem}>
          <NavLink to='/junior-plus' activeClassName={s.activeLink}>Junior-Plus</NavLink>
        </div>
      </div>
  );
}

export default Header;
