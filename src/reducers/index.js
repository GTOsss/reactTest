import { combineReducers } from 'redux';
import board from './board';
import developTools from './develop-tools';
import table from './table';
import screenCards from './screen-cards';
import editCard from './card-edit';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  board,
  developTools,
  table,
  screenCards,
  editCard,
  routing: routerReducer
})