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
      type,
      updateIsComplete,
    } = this.props;

    const completeEvent = () => {
      const item = {
        title: title,
        link: link,
        isComplete: isComplete,
        type: type,
      };

      if (isComplete) {
        item.isComplete = false;
      } else {
        item.isComplete = true;
      }

      fbApi.updateTrackedItem(id, item);
      updateIsComplete(id, item.isComplete);
    }

    return (
      <div className='single-interest'>
        <p>{title}</p>
        <a href={link}>{link}</a>
        <img
        className='delete-icon'
        src="https://cdn4.iconfinder.com/data/icons/devine_icons/Black/PNG/Folder%20and%20Places/Trash-Recyclebin-Empty-Closed.png"
        alt="delete"
        onClick={
          () => {
          this.props.deletedState(this.props.id)
        }
        }
        />
        <input type="checkbox" checked={isComplete} onChange={completeEvent}/>
      </div>
    );
  }
}

export default InterestItem;