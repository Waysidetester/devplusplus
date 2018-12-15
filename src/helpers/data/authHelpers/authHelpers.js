import firebase from 'firebase/app';
import 'firebase/auth';

const githubAuth = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

export default { githubAuth, signOut };
