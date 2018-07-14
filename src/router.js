import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import Home from './components/Home.js';
import Login from './components/Login.js';

import store  from './store.js';

export default function () {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
