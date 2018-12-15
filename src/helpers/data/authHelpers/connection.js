import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from '../apiAccess/apiKeys';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseKeys);
  }
};

export default firebaseApp;
