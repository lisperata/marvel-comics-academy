import { call, put, takeLatest } from 'redux-saga/effects';
import getHero from '../services/searchHero';
import { heroesLoaded, heroesRequested } from '../reducers/heroReducer';
import { ResponseHero } from '../types/types';
import { FetchHeroesType, HeroesActionsTypes } from '../actions/actionTypes';

function* getHeroesAsync({ payload }: FetchHeroesType) {
  const { nameStartsWith, limit, orderBy, offset } = payload;

  yield put(heroesRequested());
  const response: ResponseHero = yield call(getHero, nameStartsWith, limit, orderBy, offset);
  const { results: heroes, total } = response.data;
  yield put(heroesLoaded({heroes, total}));
}

export function* watchHeroes(): Generator {
  yield takeLatest(HeroesActionsTypes.FETCH_HEROES, getHeroesAsync);
}
