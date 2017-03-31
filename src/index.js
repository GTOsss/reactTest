import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Table from './components/table';
import ConfigureStore from './store/configure-store';
import { Provider } from 'react-redux';
import Home from './components/home';
import CardEdit from './components/card-edit';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = ConfigureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={Home} />
      <Route path="/table" component={Table} />
      <Route path="/edit/:idBoard/:idCard" component={CardEdit} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
