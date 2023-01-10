import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gamesReducer from './homepageSlice';

const rootReducer = combineReducers({
  games: gamesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
