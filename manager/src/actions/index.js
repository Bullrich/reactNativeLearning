import firebase from 'firebase';
import {EMAIL_CHANGED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from './types';

export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = (email, password) => {

  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        dispatch({type: LOGIN_USER_SUCCESS, payload: user});
      });
  };
};