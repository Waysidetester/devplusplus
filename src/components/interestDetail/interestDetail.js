import React from 'react';
import PropTypes from 'prop-types';
import fbApi from '../../helpers/data/fbApi/fbApi';
import InterestItem from './interestItem/interestItem';
import './interestDetail.scss';

class InterestDetail extends React.Component {
  static propTypes = {
    authState: PropTypes.bool,
  }

  state = {
    items: [],
  }

  getTasks = () => { fbApi.getFBData().then((data) => {
    this.setState({ items: data });
  })}

  componentDidMount() {
    this.getTasks()
  }
  
  render() {
    const { items } = this.state;
    
    const updateIsComplete = (id, bool) => {
      const newState = [ ...items ];
      items.forEach((item, i) => {
        if (item.id === id) {
          item.isComplete = bool;
          newState[i] = item;
          console.log(newState);
          this.setState({ items: newState })
        }
      })
    };

    const details = items.map(item => (
      <InterestItem
      key={item.id}
      id={item.id}
      title={item.title}
      link={item.link}
      isComplete={item.isComplete}
      updateIsComplete={updateIsComplete}
      />
    ))

    if (this.state.items !== undefined) {
      return(
      <div>
        <h2>Interest Detail section</h2>
        {details}
      </div>
      )
    }

    return (
      <div>
        <h2>Interest Detail section</h2>
      </div>
    );
  }
}

export default InterestDetail;
