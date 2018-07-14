// import firebaseApp from './database/firebase.js'
// import firebase from 'firebase/app';
// import 'firebase/auth';


export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const EDIT_POST = 'EDIT_POST';
export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

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

// const auth = firebase.auth(firebaseApp);
// console.log('>>>', {firebaseApp, auth});
//
//
// export const authFirebase = (user) => (dispatch) => {
//   console.log('>>>', {firebaseApp});
//
//   auth.createUserWithEmailAndPassword(user.username, user.password)
//     .then((authData) => {
//         console.log("User created successfully with payload-", authData);
//         //Write code to use authData to add to Users
//     }).catch((_error) => {
//         console.log("Login Failed!", _error);
//     })
// }
