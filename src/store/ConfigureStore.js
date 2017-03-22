import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function ConfigureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer
      store.replaceReducer(nextRootReducer)
    })
  }
  return store;
}

