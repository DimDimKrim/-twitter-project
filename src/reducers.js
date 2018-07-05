import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST
} from './actions.js';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case REMOVE_POST:
      return state.filter(post => post.id !== action.payload);
    case EDIT_POST:
      return state.map(post => post.id === action.payload.id ? action.payload : post);
    default:
      return state;
  }
}
