import React from 'react';
import fbApi from '../../../helpers/data/fbApi/fbApi';
import PropTypes from 'prop-types';
import './interestItem.scss';

class InterestItem extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    isComplete: PropTypes.bool,
    id: PropTypes.string,
    updateIsComplete: PropTypes.func,
  }

  render() {
    const {
      title,
      link,
      isComplete,
      id,
      updateIsComplete,
    } = this.props;

    const completeEvent = (e) => {
      const item = {
        title: title,
        link: link,
        isComplete: isComplete,
      }

      if (isComplete) {
        item.isComplete = false;
      } else {
        item.isComplete = true;
      }

      fbApi.updateTrackedItem(id, item);
      updateIsComplete(id, item.isComplete);
    }

    return (
      <div>
        <p>{title}</p>
        <a href={link}>{link}</a>
        <input type="checkbox" checked={isComplete} onChange={completeEvent}/>
      </div>
    );
  }
}

export default InterestItem;