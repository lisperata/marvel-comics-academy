import React, { SyntheticEvent } from 'react';
import Pagination from '@atlaskit/pagination';
import styles from './Paginator.module.css';

type PaginatorProps = {
  cardsPerPage: number;
  totalPages: number;
  currentPage: number;
  onChange: (_: SyntheticEvent, pageNumber: number) => void;
};

const Paginator = ({ cardsPerPage, totalPages, currentPage, onChange }: PaginatorProps): JSX.Element => {
  const arrPages: Array<number> = Array.from({ length: Math.ceil(totalPages / cardsPerPage) }, (_, k) => k + 1);
  return (
    <div className={styles.paginator}>
      <Pagination pages={arrPages} selectedIndex={currentPage - 1} onChange={onChange} />
    </div>
  );
};

export default Paginator;
