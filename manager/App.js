import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './src/reducers'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Navigation from './src/Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBY4Yh70qyNyGvndwS6Q50tlOUnNvVy1qw",
      authDomain: "manager-test-745d0.firebaseapp.com",
      databaseURL: "https://manager-test-745d0.firebaseio.com",
      projectId: "manager-test-745d0",
      storageBucket: "manager-test-745d0.appspot.com",
      messagingSenderId: "694805682973"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Navigation/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
