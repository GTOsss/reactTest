import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { ScreenCards } from './Card';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import Table from './Table'

const store = ConfigureStore();
const initialState = {
  user: 'Unknown User'
};

export default function userstate(state = initialState) {
  return state;
}

ReactDOM.render(React.createElement(Table), document.getElementById('root'));