import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Table from './components/table';
import ConfigureStore from './store/configure-store';
import { Provider } from 'react-redux';

const store = ConfigureStore();
ReactDOM.render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById('root')
)
