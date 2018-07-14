import React from "react";
import { connect } from "react-redux";

//import { fetchPosts } from '../actions.js';
import { subscribeFirebaseAction } from "../middleware/subscribeFirebase";

class List extends React.Component {
  componentDidMount() {
    //this.props.handleFetchPosts();
    this.props.subscribeToFirebase("test", "UPDATE_POSTS");
  }

  render() {
    const { posts, isLoading, error } = this.props;

    if (isLoading) {
      return <div>Is loading</div>;
    }

    if (error) {
      return (
        <div>
          <strong>Error:</strong> {error.message}
        </div>
      );
    }

    return (
      <div>
        {this.props.posts.map(post => (
          <ul class="list-group">
            <li class="list-group-item">
              <div key={post.id}>{post.content}</div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default connect(
  store => ({
    posts: store.list,
    isLoading: store.isLoading,
    error: store.error
  }),
  dispatch => ({
    //handleFetchPosts: () => dispatch(fetchPosts()),
    subscribeToFirebase: (database, callType) =>
      dispatch(subscribeFirebaseAction(database, callType))
  })
)(List);
