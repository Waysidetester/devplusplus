import React from 'react';
import PropTypes from 'prop-types';
import './interestItem.scss';

class InterestItem extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    isComplete: PropTypes.bool,
  }

  render() {
    const { title, link, isComplete } = this.props

    return (
      <div>
        <p>{title}</p>
        <a href={link}>{link}</a>
        <input type="checkbox" checked={isComplete}/>
      </div>
    );
  }
}

export default InterestItem;