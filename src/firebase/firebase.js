import * as firebase from 'firebase';
import 'firebase/auth';

import firebaseConfig from './firebaseConfig';
const axios = require('axios');

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const passwordReset = email => auth.sendPasswordResetEmail(email);

export const verifyEmail = () => {
  let user = auth.currentUser;

  user.sendEmailVerification();
}
///////////////////////////////////////////////////////////////////////////////////
export const grantRole = async() => {

  const token = await auth.currentUser.getIdToken(true);

  const data = await getUserRole(token);

  console.log(data)
}


async function getUserRole(token) {

  let url = "http://192.168.1.13:5000/grantRole";

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }

  // Axios is used instead of fetch as it gave me weird results
  let data = await axios.get(url, {headers: headers}).then(response => response.data);
  return data;
}
