import React from 'react';
import githubApi from '../../helpers/data/github/githubApi';
import './githubUser.scss';

class GithubUser extends React.Component {
  state = {
    ifAuthed: false,
  }

  username = this.props.username
  ghUser = undefined;

  componentDidMount() {
    if (this.username !== '') {
    githubApi.githubRequest(this.username).then((data) => {
      console.log(data);
      this.ghUser = data;
      this.setState({ ifAuthed: true })
    });
    }
  }

  
  
  
  render() {
    
    if (this.state.ifAuthed) {
      return(
        <div>
          <img src={this.ghUser.avatar_url} alt={this.username}/>
          <p>{this.ghUser.bio}</p>
          <p><a href={this.ghUser.url}>My Github Profile!</a></p>
        </div>
      )
    }

    return (
        <h2>Github User section</h2>
    );
  }
}

export default GithubUser;
