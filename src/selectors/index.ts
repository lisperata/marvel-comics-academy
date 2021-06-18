import { StoreStateType } from '../reducers';
import { ComicType, HeroType } from '../types/types';

export const getComics = (state: StoreStateType): ComicType[] => state.comicReducer.comics;
export const getHeroes = (state: StoreStateType): HeroType[] => state.heroReducer.heroes;
export const getTotalHeroes = (state: StoreStateType): number => state.heroReducer.total;
export const getTotalComics = (state: StoreStateType): number => state.comicReducer.total;
export const getLoadingHeroes = (state: StoreStateType): boolean => state.heroReducer.isLoading;
export const getLoadingComics = (state: StoreStateType): boolean => state.comicReducer.isLoading;
export const getOrder = (state: StoreStateType): string => state.heroReducer.orderBy;
