import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from "./common";
import firebase from 'firebase';

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(this.onLoginError.bind(this))
          .then(this.onLoginSuccess.bind(this));
      })
      .then(this.onLoginSuccess.bind(this));
  }

  onLoginError() {
    this.setState({error: 'Authentication Failed.', loading: false});
  }

  onLoginSuccess() {
    this.setState({email: '', password: '', error: '', loading: false});
  }

  renderButton() {
    if (this.state.loading)
      return <Spinner/>;
    else
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in!
        </Button>
      );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#ff0000'
  }
});

export default LoginForm;
