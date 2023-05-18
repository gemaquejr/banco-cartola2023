import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <input className="nav_toggle" id="nav-toggle" type="checkbox" />
        <div className="logo"><strong>Cartola 2023</strong></div>
        <ul className="links">
          <li><NavLink to="/teams">Times</NavLink></li>
          <li><NavLink to="/players">Jogadores</NavLink></li> 
          <li><NavLink to="/coaches">Treinadores</NavLink></li> 
          <li><NavLink to="/rounds">Rodada</NavLink></li> 
          <li><NavLink to="/matches">Confronto</NavLink></li>        
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </header>
  );
}

export default Header;