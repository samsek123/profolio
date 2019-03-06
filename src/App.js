import React, { Component } from 'react';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

//i18n
import { I18nextProvider } from 'react-i18next';

import reduxData from './Reducers/';

import i18n from './GlobalUtils/i18n';

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
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router />
        </Provider>
      </I18nextProvider>
    )
  }
}

export default App;
