import { combineReducers } from 'redux';
import board from './board';
import developTools from './develop-tools';
import table from './table';
import screenCards from './screen-cards';

export default combineReducers({
  board,
  developTools,
  table,
  screenCards
})