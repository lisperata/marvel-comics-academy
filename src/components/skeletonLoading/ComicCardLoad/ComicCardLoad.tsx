import React from 'react';
import styles from './ComicCardLoad.module.css';

const ComicCardLoad: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image} />
      <div className={styles.info}>
        <div className={styles.title} />
        <div className={styles.descr} />
      </div>
    </div>
  );
};

export default ComicCardLoad;
