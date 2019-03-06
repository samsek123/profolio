import React, { Component } from 'react';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduxData from './Reducers/';

// Router
import Router from './Router';

const store = createStore(
  reduxData,
  applyMiddleware(
    thunkMiddleware,
    createLogger(),
  ),
);

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
