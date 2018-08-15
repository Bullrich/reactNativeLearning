import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';

class Main extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDQkvbjO664cDP69MkJ9AfpmP85Nz__Xcg",
      authDomain: "authentication-test-f062e.firebaseapp.com",
      databaseURL: "https://authentication-test-f062e.firebaseio.com",
      projectId: "authentication-test-f062e",
      storageBucket: "authentication-test-f062e.appspot.com",
      messagingSenderId: "401163284348"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentiacion"/>
        <Text>
          An App
        </Text>
      </View>
    );
  }
}

export default Main;
