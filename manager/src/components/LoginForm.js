import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';
import {connect} from 'react-redux';
import {emailChange, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    console.log(this.props);
    const {email, password} = this.props;
    console.log(email + ' : ' + password);
    this.props.loginUser(email, password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      password: state.auth.password
    };
  }
;

export default connect(mapStateToProps, {
  emailChange, passwordChanged, loginUser
})(LoginForm);
