import { Nullable } from '../types/types';
import { HeroesActionsTypes } from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const fetchHeroes = createAction(
  HeroesActionsTypes.FETCH_HEROES,
  (nameStartsWith: Nullable<string>,
  limit: Nullable<string>,
  orderBy: string,
  offset: number,
) => ({
    payload: { nameStartsWith, limit, orderBy, offset },
  }),
);
