import React from 'react';
import { connect } from 'react-redux';

const List = (props) => (
  <div>
  {
    props.posts.map(post => (
      <div key={post.id}>
        {post.content}
      </div>
    ))
  }
  </div>
);

export default connect(store => ({ posts: store }))(List);
