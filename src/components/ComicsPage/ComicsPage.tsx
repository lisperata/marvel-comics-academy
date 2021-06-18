import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ComicsPage.module.css';
import ComicCardLoad from '../skeletonLoading/ComicCardLoad';
import ComicCard from '../ComicCard';
import Paginator from '../Paginator';
import { fetchComics } from '../../actions/comicsAction';
import { getComics, getLoadingComics, getTotalComics } from '../../selectors';

type ComicsMatchType = {
  id: string;
};

const ComicsPage = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  const dispatch = useDispatch();
  const id = Number(useParams<ComicsMatchType>().id);
  const comics = useSelector(getComics);
  const total = useSelector(getTotalComics);
  const isLoading = useSelector(getLoadingComics);

  useEffect(() => {
    dispatch(fetchComics(id, cardsPerPage, currentPage));
  }, []);

  const handleChangePage = (_: SyntheticEvent, page: number): void => {
    setCurrentPage(page);

    dispatch(fetchComics(id, cardsPerPage, page));
  };

  const paginatorShown = (): JSX.Element | false => {
    const totalPages = total / cardsPerPage;
    return (
      Math.ceil(totalPages) !== 1 &&
      Math.ceil(totalPages) !== 0 && (
        <Paginator
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={handleChangePage}
        />
      )
    );
  };

  const comicCards = (): JSX.Element => {
    return (
      <>
        {comics.map((el) => {
          const card = {
            comic: el,
          };
          return (
            <React.Fragment key={el.id}>
              <ComicCard {...card.comic} />
            </React.Fragment>
          );
        })}
      </>
    );
  };

  const renderHeroCardsPlaceholder = (): JSX.Element => {
    return (
      <>
        {[...Array(cardsPerPage)].map((_, i) => {
          return <ComicCardLoad key={i} />;
        })}
      </>
    );
  };

  return (
    <div className={styles.container}>
      {isLoading ? renderHeroCardsPlaceholder() : comicCards()}
      {paginatorShown()}
    </div>
  );
};

export default ComicsPage;
