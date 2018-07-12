import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap';

import { updateFirebaseAction } from '../middleware/updateFirebase'
//import { addPost } from '../actions.js'

class Add extends React.Component {

  constructor() {
    super();
    this.state = {
      value: "",
    }

    this.onAdd = this.onAdd.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  
  onAdd(event) {
    event.preventDefault();

    const newPost = {
      //id: +new Date(),
      content: this.state.value,
    }

    this.props.handleUpdateFirebase(newPost);
    this.setState({ value: "" });
  }
  
  render() {
    return (
      <form onSubmit={this.onAdd}>
        <input
          value={this.state.value}
          onChange={this.onChange}
        />
        <button
          type="submit"
          className="btn btn-danger"
        >
          Добавить
      </button>
      </form>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    //handleAdd: post => dispatch(addPost(post))
    handleUpdateFirebase: (post) => dispatch(updateFirebaseAction('test', post))
  })
  
)(Add);
