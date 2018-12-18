import React from 'react';
import PropTypes from 'prop-types'
import './ghUserDetail.scss';

class UserDetail extends React.Component {
  static propTypes = {
    userImage: PropTypes.string,
    username: PropTypes.string,
    userBio: PropTypes.string,
    userUrl: PropTypes.string,
    userCommits: PropTypes.number,
  }

  render() {
    return (
        <div>
          <img src={this.props.userImage} alt={this.props.username}/>
          <p>{this.props.userBio}</p>
          <p><a href={this.props.userUrl}>My Github Profile!</a></p>
          <p>{this.props.userCommits} commits in the last 5 days</p>
        </div>
    );
  }
}

export default UserDetail
