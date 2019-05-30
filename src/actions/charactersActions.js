import { createAction } from 'promise-middleware-redux';
import { getCharacters } from '../services/LastAirbenderApi';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
  pendingType: FETCH_CHARACTERS_LOADING,
  payload: getCharacters()
});
