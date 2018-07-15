import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { authFirebase } from "../actions.js";
import { Redirect } from 'react-router'

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onLogin = this.onLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onLogin(e) {
    e.preventDefault();

    const { username, password } = this.state;
    console.log({ username, password });
    this.props.handleLogin({ username, password });
  }

  render() {
    if (this.props.user) {
      return <Redirect to="/"/>;
    }

    return (
      <form onSubmit={this.onLogin}>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
          </div>
          <input name="username" type="text" class="form-control" placeholder="Логин" aria-label="Логин" aria-describedby="basic-addon1" onChange={this.onChange} />
        </div>
        <div class="input-group mb-3">
          <input name="password" type="text" class="form-control" placeholder="Пароль" aria-label="Пароль" aria-describedby="basic-addon2" onChange={this.onChange} />
          <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="submit">Зарегестрироваться</button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  store => ({
    user: store.user
  }),
  dispatch => ({
    handleLogin: user => dispatch(authFirebase(user))
  })
)(SignUp);
