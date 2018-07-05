export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const EDIT_POST = 'EDIT_POST';

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
