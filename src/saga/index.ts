import { watchHeroes } from './heroesSaga';
import { watchComics } from './comicsSaga';
import { all } from '@redux-saga/core/effects';

function* rootSaga(): any {
  yield all([watchHeroes(), watchComics()]);
}

export default rootSaga;
