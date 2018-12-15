import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../helpers/data/authHelpers/connection';
import MyNav from '../components/myNavbar/myNavbar';
import authHelpers from '../helpers/data/authHelpers/authHelpers';
import AddInterest from '../components/addInterest/addInterest';
import InterestDetail from '../components/interestDetail/interestDetail';
import GithubUser from '../components/githubUser/githubUser';
import './App.scss';

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  render() {
    const login = () => {
      authHelpers.githubAuth()
        .catch(err => console.error('authentication errored', err));
    };

    const logout = () => {
      authHelpers.signOut();
    };

    if (!this.state.authed) {
      return (
      <div className="App">
        <MyNav authState={this.state.authed} login={login}/>
      </div>
      );
    }

    return (
        <div className="App">
          <MyNav authState={this.state.authed} logout={logout}/>
          <GithubUser />
          <AddInterest />
          <InterestDetail />
        </div>
    );
  }
}

export default App;
