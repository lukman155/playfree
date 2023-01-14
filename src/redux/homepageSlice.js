import { createAsyncThunk } from '@reduxjs/toolkit';

const games = [];

const GET_GAMES = 'PLAYFREE/REDUX/GET_GAMES';
const GET_GAMES_SUCCESS = 'PLAYFREE/REDUX/GET_GAMES_SUCCESS';
const GET_GAMES_FAIL = 'PLAYFREE/REDUX/GET_GAMES_FAIL';
const GAME_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

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

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8ae90c822bmsh4de3bb92bbbdda1p145969jsna0a3caea0af3',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

export const getGames = createAsyncThunk(
  GET_GAMES,
  async (_, thunk) => {
    const response = await fetch(GAME_URL, options);
    const data = await response.json();
    thunk.dispatch(getGameSuccess(data));
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
