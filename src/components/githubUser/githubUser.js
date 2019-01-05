import React from 'react';
import UserDetail from './ghUserDetail/ghUserDetail';
import PropTypes from 'prop-types';
import githubApi from '../../helpers/data/github/githubApi';
import './githubUser.scss';

class GithubUser extends React.Component {
static propTypes = {
  authState: PropTypes.bool,
  username: PropTypes.string,
}

  state = {
    ghUser: {},
    commits: 0,
  }

  
  
  componentDidMount() {
    if (this.props.username !== '') {
    githubApi.githubRequest(this.props.username).then((data) => {
      this.setState({ ghUser: data })
      return data
    })
    .then(() => {
      githubApi.githubCommits(this.props.username).then((datas) => {
        datas.forEach(data => {
          const time = new Date(data.created_at)
          const now = Date.now();
          if (data.type === 'PushEvent' && now-time <= 439488542) {
            this.setState({ commits: this.state.commits + data.payload.commits.length });
          }
        });
      })
    });
    }
  }

  
  
  
  render() {
    
    if (this.props.username) {
      return(
        <div className='github-user'>
          <UserDetail
          userImage={this.state.ghUser.avatar_url}
          userBio={this.state.ghUser.bio}
          username={this.props.username}
          userUrl={this.state.ghUser.url}
          userCommits={this.state.commits}
          />
        </div>
      )
    }

    return (
      <div className='github-user'>
        <h2>Github User section</h2>
      </div>
    );
  }
}

export default GithubUser;
