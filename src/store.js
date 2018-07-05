import { createStore } from 'redux';

import reducers from './reducers.js';

const initialStore = localStorage['posts']
  ? JSON.parse(localStorage['posts'])
  : [
    {
      id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
    },
    {
      id: 2,
      content: 'elit, sed do eiusmod tempor incididunt ut labore et dolore'
    },
    {
      id: 3,
      content: 'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
    },
    {
      id: 4,
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa'
    }
  ];

const store = createStore(reducers, initialStore);

store.subscribe(() => {
  const str = JSON.stringify(store.getState());
  localStorage['posts'] = str;
});

export default store;
