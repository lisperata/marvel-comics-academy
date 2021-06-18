import { call, put, takeLatest } from 'redux-saga/effects';
import getComics from '../services/searchComics';
import { comicsLoaded, comicsRequested } from '../reducers/comicReducer';
import { ResponseComics } from '../types/types';
import { FetchComicsType, ComicsActionsTypes } from '../actions/actionTypes';

function* getComicsAsync({ payload }: FetchComicsType) {
  const { id, limit, offset } = payload;
  yield put(comicsRequested());
  const response: ResponseComics = yield call(getComics, id, limit, offset);
  const { results: comics, total } = response.data;
  yield put(comicsLoaded({comics, total}));
}

export function* watchComics(): Generator {
  yield takeLatest(ComicsActionsTypes.FETCH_COMICS, getComicsAsync);
}
