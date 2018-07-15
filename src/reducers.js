import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  FETCH_POSTS_START,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_SUCCESS
} from './actions.js';

const defaultState = {
  isLoading: false,
  error: null,
  list: [],
  user: null
};

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'UPDATE_POSTS':
      return {
        ...state,
        list: Object.keys(action.payload || {}).map(key => ({
          id: key,
          content: action.payload[key].content
        })).sort((a, b) => a.id > b.id ? 1 : -1)
      }
          // case FETCH_POSTS_START:
          //   return {
          //     ...state,
          //     isLoading: true
          //   }
          // case FETCH_POSTS_FAILURE:
          //   return {
          //     ...state,
          //     error: action.payload,
          //     isLoading: false
          //   }
          // case FETCH_POSTS_SUCCESS:
          //   return {
          //     ...state,
          //     list: [...state.list, ...action.payload],
          //     isLoading: false,
          //   }
    case ADD_POST:
      return {
        ...state,
        list: [action.payload, ...state.list]
      };
    case REMOVE_POST:
     return {
       ...state,
       list: state.list.filter(post => post.id !== action.payload)
     };
      return
    case EDIT_POST:
     return {
       ...state,
       list: state.list.map(post => post.id === action.payload.id ? action.payload : post)
     };
     case LOG_IN_SUCCESS:
       return {
         ...state,
         user: action.payload
       }
     case LOG_OUT_SUCCESS:
       return {
         ...state,
         user: null
       }
    default:
      return state;
  }
}
