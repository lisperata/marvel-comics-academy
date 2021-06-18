import React from 'react';
import styles from './ComicCard.module.css';
import { ComicType } from '../../types/types';

const ComicCard: React.FC<ComicType> = (comic: ComicType) => {
  return (
    <article className={styles.wrapper}>
      <img className={styles.photo} src={`${comic.thumbnail.path}/portrait_fantastic.jpg`} alt="Hero photo" />
      <div className={styles.info}>
        <h2 className={styles.title}>{comic.title}</h2>
        <p className={styles.description}>{comic.description}</p>
        <div className={styles.series}>Series: {comic.series.name}</div>
        <aside className={styles.edition}>
          <div>pages: {comic.pageCount || '-'}</div>
          <div>price: {comic.prices.price || '-'}</div>
        </aside>
      </div>
    </article>
  );
};

export default ComicCard;
