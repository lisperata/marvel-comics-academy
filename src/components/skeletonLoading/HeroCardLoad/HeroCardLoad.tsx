import React from 'react';
import styles from './HeroCardLoad.module.css';

const HeroCardLoad: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image} />
      <div className={styles.title} />
      <div className={styles.btn} />
    </div>
  );
};

export default HeroCardLoad;
