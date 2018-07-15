import React from "react";
import { connect } from "react-redux";
import "bootstrap";
import { Link } from "react-router-dom"

import { updateFirebaseAction } from "../middleware/updateFirebase";
import { logoutFirebase } from '../actions.js'

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };

    this.onAdd = this.onAdd.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
  }

  onLogOut(event) {
    event.preventDefault();
    this.props.handleLogOut();
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onAdd(event) {
    event.preventDefault();

    const newPost = {
      //id: +new Date(),
      content: this.state.value
    };

    this.props.handleUpdateFirebase(newPost);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <div class="dropdown open">
          <button
            class="btn btn-info dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Меню
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {
            this.props.user
            ? (
              <button class="dropdown-item" type="button" onClick={this.onLogOut}>
                Выйти
              </button>
            )
            : (
              <Link class="dropdown-item" to="/login">
                Войти
              </Link>
            )
          }
          </div>
        </div>
        <form onSubmit={this.onAdd}>
          <input value={this.state.value} onChange={this.onChange} />

          <button type="submit" className="btn btn-danger">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    //handleAdd: post => dispatch(addPost(post))
    handleUpdateFirebase: post => dispatch(updateFirebaseAction("test", post)),
    handleLogOut: post => dispatch(logoutFirebase())
  })
)(Add);
