import { HeroType } from '../types/types';
import { HeroLoadedReturnType } from '../actions/actionTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  heroes: HeroType[];
  orderBy: string;
  isLoading: boolean;
  total: number;
}

const initialState: InitialStateType = {
  heroes: [],
  orderBy: 'name',
  isLoading: true,
  total: 0,
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    heroesLoaded: (state: InitialStateType, action: PayloadAction<HeroLoadedReturnType>) => {
      state.heroes = action.payload.heroes;
      state.total = action.payload.total;
      state.isLoading = false;
    },

    heroesRequested: (state: InitialStateType) => {
      state.isLoading = true;
      state.heroes = [];
    },

    changedOrder: (state: InitialStateType, action: PayloadAction<string>) => {
      state.orderBy = action.payload;
    },
  },
});

export const { changedOrder, heroesRequested, heroesLoaded } = heroesSlice.actions;
export default heroesSlice.reducer;
