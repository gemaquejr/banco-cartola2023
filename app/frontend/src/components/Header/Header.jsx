import React, { useState } from 'react';
import Menu from './menu.png';
import Close from './close.png';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <div className={styles.container_navbar}>
        <ul className={styles.container_links}>
          <li><a href="hero">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="services">Services</a></li>
          <li><a href="contacts">contacts</a></li>
        </ul>
        <a href="_blank" className={styles.container_action_btn}>Get Started</a>
        <div className={styles.container_toggle_btn} onClick={toggleDropdown}>
          <img src={isOpen ? Menu : Close} alt={isOpen ? "Header_Menu" : "Header_Close"} />
        </div>
      </div>

      <div className={`${styles.container_dropdown_menu} ${isOpen ? "open" : ""}`}>
        <li><a href="hero">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="contacts">contacts</a></li>
        <li><a href="_blank" className={styles.container_action_btn}>Get Started</a></li>
      </div>
    </header>
  );
}

export default Header;