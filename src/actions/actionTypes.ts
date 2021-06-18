import { ComicType, HeroType, Nullable } from '../types/types';

export type ActionType<T> = {
  type: string;
  payload: T;
};

export type ComicsArrayType = {
  comics: Array<ComicType>;
  total: number;
};

export type HeroesArrayType = {
  heroes: HeroType[];
  total: number;
  orderBy: string;
  isLoading: boolean;
};

export type FetchComicsType = ActionType<{ id: Nullable<number>; limit: Nullable<number>; offset: Nullable<number> }>;
export type FetchHeroesType = ActionType<{
  nameStartsWith: Nullable<string>;
  limit: Nullable<string>;
  orderBy: string;
  offset: number;
}>;

export enum ComicsActionsTypes {
  COMICS_LOADED = 'COMICS_LOADED',
  COMICS_REQUESTED = 'COMICS_REQUESTED',
  FETCH_COMICS = 'FETCH_COMICS',
}

export enum HeroesActionsTypes {
  HEROES_LOADED = 'HEROES_LOADED',
  HEROES_REQUESTED = 'HEROES_REQUESTED',
  FETCH_HEROES = 'FETCH_HEROES',
  ORDER_CHANGED = 'ORDER_CHANGED',
}

export type HeroLoadedReturnType = {
  heroes: HeroType[];
  total: number;
};

export type ComicsActionReturnType = ActionType<ComicsArrayType>;
export type HeroesActionReturnType = ActionType<HeroesArrayType>;
export type HeroLoadedType = ActionType<HeroLoadedReturnType>;
export type HeroChangedOrderType = ActionType<{ orderBy: string }>;
