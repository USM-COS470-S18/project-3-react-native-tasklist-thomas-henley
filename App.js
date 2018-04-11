import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBZi2DxuaXN2ksEQpwsDl7ALKYNDL7Y4GU',
      authDomain: 'tasklist-119e8.firebaseapp.com',
      databaseURL: 'https://tasklist-119e8.firebaseio.com',
      projectId: 'tasklist-119e8',
      storageBucket: 'tasklist-119e8.appspot.com',
      messagingSenderId: '370748739047'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
