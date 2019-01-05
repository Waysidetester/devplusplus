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
    github_user: '',
    addedInterest: false,
  }

  updateInterest = () => {
    if (this.state.addedInterest) {
      this.setState({ addedInterest: true });
    } else {
      this.setState({ addedInterest: false });
    }
  };

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
        .then((res) => {
          this.setState({ github_user: res.additionalUserInfo.username });
        })
        .catch(err => console.error('authentication errored', err));
    };

    const logout = () => {
      authHelpers.signOut();
      this.setState({ github_user: '' })
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
          <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <GithubUser username={this.state.github_user} authState={this.state.authed}/>
            </div>
            <div className='col'>
              <AddInterest updateInterest={this.updateInterest}/>
              <div className='interest-detail'>
                <InterestDetail
                authState={this.state.authed}
                addedInterest={this.state.addedInterest}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default App;
