import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import comicReducer from './comicReducer';

const reducer = combineReducers({
  comicReducer,
  heroReducer,
});

export default reducer;
export type StoreStateType = ReturnType<typeof reducer>;
