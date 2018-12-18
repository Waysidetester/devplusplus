import firebase from 'firebase/app';
// import apiKeys from '../apiAccess/apiKeys';
import axios from 'axios';
import 'firebase/auth'

const githubClientId = '';

const githubClientSecret = '';

const getUser = () => firebase.auth().currentUser;

const githubRequest = user => new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${user}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
    .then((results) => resolve(results.data))
    .catch((err) => reject(err));
});

const githubCommits = user => new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${user}/events/public?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
    .then((results) => resolve(results.data))
    .catch((err) => reject(err));
});

export default { getUser, githubRequest, githubCommits };
