import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchPage.module.css';
import { fetchHeroes } from '../../actions/heroesAction';
import { changedOrder } from '../../reducers/heroReducer';
import { Nullable } from '../../types/types';
import SearchPanel from '../SearchPanel';
import { ValueType } from '@atlaskit/select';
import HeroCard from '../HeroCard';
import Paginator from '../Paginator';
import HeroCardLoad from '../skeletonLoading/HeroCardLoad';
import { getHeroes, getLoadingHeroes, getOrder, getTotalHeroes } from '../../selectors';

const SearchPage = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [cardsPerPage] = useState(5);
  const dispatch = useDispatch();
  const history = useHistory();
  const heroes = useSelector(getHeroes);
  const total = useSelector(getTotalHeroes);
  const isLoading = useSelector(getLoadingHeroes);
  const orderBy = useSelector(getOrder);

  useEffect(() => {
    const inputValue = getSearchName();
    if (inputValue) {
      setInputValue(inputValue);
    }
    const offset: Nullable<number> =
      currentPage === 0 ? currentPage * Number(cardsPerPage) : (currentPage - 1) * Number(cardsPerPage);

    dispatch(fetchHeroes(getSearchName(), String(cardsPerPage), orderBy, offset));
  }, [location.search, orderBy]);

  const getQuery = (parameter: string): Nullable<string> => new URLSearchParams(location.search).get(parameter);

  const getSearchName = (): Nullable<string> => getQuery('name');
  const getSearchPage = (): Nullable<string> => getQuery('page');

  const handleChangeSearch = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(ev.target.value);
  };

  const handleChangeOrder = (
    value: ValueType<
      {
        label: string;
        value: string;
      },
      false
    >,
  ): void => {
    if (value?.value) {
      dispatch(changedOrder(value.value));
    }
  };

  const handleClickBtn = (): void => {
    if (inputValue) {
      history.push(`/?name=${inputValue}`);
    } else {
      history.push('/');
    }
  };

  const handleChangePage = (_: SyntheticEvent, page: number): void => {
    const name = getSearchName();
    setCurrentPage(page);
    let nextUrl = '';
    if (name) {
      nextUrl = page === 1 ? `/?name=${name}` : `/?name=${name}&page=${page}`;
    } else {
      nextUrl = `/?page=${page}`;
    }
    history.push(nextUrl);
  };

  const heroCards = (): JSX.Element => {
    return (
      <>
        {heroes.map((el) => {
          const card = {
            hero: el,
          };
          return (
            <div key={el.id}>
              <HeroCard {...card.hero} />
            </div>
          );
        })}
      </>
    );
  };

  const renderHeroCardsPlaceholder = (): JSX.Element => {
    return (
      <>
        {[...Array(Number(cardsPerPage))].map((_, i) => {
          return <HeroCardLoad key={i} />;
        })}
      </>
    );
  };

  return (
    <div className={styles.container}>
      <SearchPanel
        value={inputValue}
        onChange={handleChangeSearch}
        onClick={handleClickBtn}
        changeSelect={handleChangeOrder}
      />
      {isLoading ? renderHeroCardsPlaceholder() : heroCards()}
      {Math.ceil(total / cardsPerPage) !== 1 && Math.ceil(total / cardsPerPage) !== 0 && (
        <Paginator
          cardsPerPage={cardsPerPage}
          currentPage={Number(getSearchPage()) || 1}
          totalPages={total}
          onChange={handleChangePage}
        />
      )}
    </div>
  );
};

export default SearchPage;
