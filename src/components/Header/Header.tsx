import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <Link to="/">
      <header className={styles.linkss} />
    </Link>
  );
};

export default Header;
