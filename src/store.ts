import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];

export const store = configureStore({
  reducer,
  middleware,
});
sagaMiddleware.run(rootSaga);
