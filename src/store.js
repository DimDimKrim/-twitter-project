import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers.js';

import subscribeFirebase from './middleware/subscribeFirebase';

const initialStore = localStorage['posts']
  ? JSON.parse(localStorage['posts'])
  : {
      isLoading: false,
      error: null,
      list: []
    };

const store = createStore(
  reducers,
  initialStore,
  composeWithDevTools(applyMiddleware(subscribeFirebase, thunk))
);

store.subscribe(() => {
  const str = JSON.stringify(store.getState());
  localStorage['posts'] = str;
});

export default store;
