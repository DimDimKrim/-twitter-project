import firebaseInit from './database/firebase.js'
const auth = firebaseInit().auth();

export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const EDIT_POST = 'EDIT_POST';
export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export const fetchPostsStart = {
  type: FETCH_POSTS_START
}

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFailure = (err) => ({
  type: FETCH_POSTS_FAILURE,
  payload: err
});

export const addPost = post => ({
  type: ADD_POST,
  payload: post
});

export const removePost = id => ({
  type: REMOVE_POST,
  payload: id
});

export const editPost = post => ({
  type: EDIT_POST,
  payload: post
});

export const fetchPosts = () => (dispatch) => {
  dispatch(fetchPostsStart);

  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => data.map(({ id, title }) => ({
      id: `${id}-${Math.random()}`,
      content: title
    })))
    .then((list) => {
      setTimeout(
        () => dispatch(fetchPostsSuccess(list)),
        2000
      );
    })
    .catch((err) => dispatch(fetchPostsFailure(err)));
}

export const logInSuccess = user => ({
  type: LOG_IN_SUCCESS,
  payload: user
});

export const logInFailure = err => ({
  type: LOG_IN_SUCCESS,
  payload: err
});

export const logOutSuccess = user => ({
  type: LOG_OUT_SUCCESS,
});


export const logoutFirebase = () => (dispatch) => {
  auth.signOut().then((info) => {
    console.log(info);
    dispatch({
      type: 'LOG_OUT_SUCCESS'
    })
  }).catch((error) => {
    console.log(error);
  });
}

export const authFirebase = (user) => (dispatch) => {
  auth.createUserWithEmailAndPassword(user.username, user.password)
    .then((authData) => {
        console.log("User created successfully with payload: ", authData);
        dispatch(logInSuccess(authData));
    }).catch((_error) => {
        console.log("Login Failed!", _error);
    })
}

export const loginFirebase = (user) => (dispatch) => {
  auth.signInWithEmailAndPassword(user.username, user.password)
    .then((authData) => {
        console.log("User created successfully with payload: ", authData);
        dispatch(logInSuccess(authData));
    }).catch((_error) => {
        console.log("Login Failed!", _error);
    })
}
