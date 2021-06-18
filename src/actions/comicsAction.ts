import { Nullable } from '../types/types';
import { ComicsActionsTypes } from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const fetchComics = createAction(
  ComicsActionsTypes.FETCH_COMICS,
  (id: Nullable<number>, limit: Nullable<number>, offset: Nullable<number>) => ({ payload: { id, limit, offset } }),
);
