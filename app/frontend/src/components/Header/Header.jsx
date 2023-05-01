import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <nav>
        <input className={styles.nav_toggle} id="nav-toggle" type="checkbox" />
        <div className={styles.logo}><strong>Cartola 2023</strong></div>
        <ul className={styles.links}>
          <li><a href="teams">Times</a></li>
          <li><a href="players">Jogadores</a></li>
          <li><a href="coaches">Técnicos</a></li>
          <li><a href="rounds">Rodada</a></li>
          <li><a href="matches">Confrontos</a></li>
        </ul>
        <label htmlFor="nav-toggle" className={styles['icon-burger']}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </label>
      </nav>
    </header>
  );
}

export default Header;