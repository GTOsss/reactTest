import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function ConfigureStore(initialState) {
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = rootReducer
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }
  return store;
}