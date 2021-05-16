import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './style.module.scss';
function Header() {
  return (
    <nav className={style.header}>
      <ul>
        <li>
          <NavLink exact activeClassName={style.active} className={style.link} to="/">Produtos</NavLink>
        </li>
        <li>
          <NavLink activeClassName={style.active} className={style.link} to="contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
