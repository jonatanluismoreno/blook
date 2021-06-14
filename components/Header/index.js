import React from 'react';

import ThemeToggler from '../ThemeToggler';

import styles from "./styles.module.css";

function Header({ children, title }) {
  return (
    <header className={styles.header}>
      <div className={styles.logos}>
        <h1>Blook</h1>
      </div>
      <ThemeToggler />
      {title && <h1>{title}</h1>}
      {children}
    </header>
  )
}

export default Header;
