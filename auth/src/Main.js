import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Button, Spinner, Card, CardSection} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class Main extends Component {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDQkvbjO664cDP69MkJ9AfpmP85Nz__Xcg",
      authDomain: "authentication-test-f062e.firebaseapp.com",
      databaseURL: "https://authentication-test-f062e.firebaseio.com",
      projectId: "authentication-test-f062e",
      storageBucket: "authentication-test-f062e.appspot.com",
      messagingSenderId: "401163284348"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user)
        this.setState({loggedIn: true});
      else
        this.setState({loggedIn: false});
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={()=> firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm/>;
      default:
        return <Spinner size={"large"}/>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default Main;
