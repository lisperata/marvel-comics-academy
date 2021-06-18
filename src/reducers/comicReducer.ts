import { ComicType } from '../types/types';
import { ComicsArrayType } from '../actions/actionTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  comics: Array<ComicType>;
  isLoading: boolean;
  total: number;
}

const initialState: InitialStateType = {
  comics: [],
  isLoading: true,
  total: 0,
};


const comicsSlice = createSlice({
  name: 'comics',
  initialState: initialState,
  reducers: {
    comicsLoaded: (state: InitialStateType, action: PayloadAction<ComicsArrayType>) => {
      state.comics = action.payload.comics;
      state.total = action.payload.total;
      state.isLoading = false;
    },

    comicsRequested: (state: InitialStateType) => {
      state.isLoading = true;
      state.comics = [];
    },
  },
});

export const { comicsLoaded, comicsRequested } = comicsSlice.actions;
export default comicsSlice.reducer;
