import React from 'react';
import Button from '@atlaskit/button';
import styles from './HeroCard.module.css';
import { Link } from 'react-router-dom';
import { HeroType } from '../../types/types';

const HeroCard: React.FC<HeroType> = (hero: HeroType) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/comics/${hero.id}`}>
        <img className={styles.photo} src={`${hero.thumbnail.path}/portrait_fantastic.jpg`} alt="Hero photo" />
      </Link>
      <Link className={styles.name} to={`/comics/${hero.id}`}>
        {hero.name}
      </Link>
      <Link to={`/comics/${hero.id}`}>
        <Button className={styles.btn} appearance="danger">
          See more...
        </Button>
      </Link>
    </div>
  );
};

export default HeroCard;
