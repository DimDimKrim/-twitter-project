import React from "react";
import { connect } from "react-redux";

import { authFirebase } from '../actions.js'

class Add extends React.Component {
  constructor() {
    super();
    this.state = {

    };
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

    const {username, password} = this.state;
    console.log({username, password});
    this.props.handleLogin({username, password});
  }

  render() {
    if (this.props.user) {
      return "Logined / Redirect";
    }

    return (
      <form onSubmit={this.onLogin}>
        <input name="username" onChange={this.onChange} />
        <input name="password" onChange={this.onChange} />
        <button type="submit">Log in</button>
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
)(Add);
