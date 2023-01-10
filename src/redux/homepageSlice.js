import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const games = [];

const GET_GAMES = 'PLAYFREE/REDUX/GET_GAMES';
const GET_GAMES_SUCCESS = 'PLAYFREE/REDUX/GET_GAMES_SUCCESS';
const GET_GAMES_FAIL = 'PLAYFREE/REDUX/GET_GAMES_FAIL';

const getGameSuccess = (games) => ({
  type: GET_GAMES_SUCCESS,
  payload: games.map((game) => ({
    id: game.id,
    name: game.title,
    description: game.short_description,
    url: game.game_url,
    image: game.thumbnail,
    category: game.genre,
    platform: game.platform,
  })),
});

export const getGames = createAsyncThunk(
  GET_GAMES,
  async (_, thunk) => {
    const response = await axios.get('https://www.freetogame.com/api/games');
    thunk.dispatch(getGameSuccess(response.data));
  },
);

const gamesReducer = (state = games, action) => {
  switch (action.type) {
    case GET_GAMES_SUCCESS:
      return [...action.payload];
    case GET_GAMES_FAIL:
      return [];
    default:
      return state;
  }
};

export default gamesReducer;
