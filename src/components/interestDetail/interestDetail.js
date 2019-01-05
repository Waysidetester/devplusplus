import React from 'react';
import PropTypes from 'prop-types';
import fbApi from '../../helpers/data/fbApi/fbApi';
import InterestItem from './interestItem/interestItem';
import './interestDetail.scss';

class InterestDetail extends React.Component {
  static propTypes = {
    authState: PropTypes.bool,
    addedInterest: PropTypes.bool,
  }

  state = {
    items: [],
    interest: 'Blog',
  }

  
  getTasks = () => { fbApi.getFBData().then((data) => {
    this.setState({ items: data });
  })}
  
  componentDidMount() {
    this.getTasks()
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('updated')
    if (prevProps !== this.props && prevState !== this.state) {
      const x = () => this.getTasks();
      window.setTimeout(x, 1000);
    }
  }
  
  render() {
    const { items } = this.state;
    
    const deletedState = key => {
      fbApi.deleteTrackedItem(key).then(() => {
        fbApi.getFBData().then((data) => {
          this.setState({ items: data});
        })
      })
    };
    
    const updateIsComplete = (id, bool) => {
      const newState = [ ...items ];
      items.forEach((item, i) => {
        if (item.id === id) {
          item.isComplete = bool;
          newState[i] = item;
          this.setState({ items: newState })
        }
      })
    };

    const incompleteDetails = items.map(item => {
      
      if (this.state.interest === item.type && !item.isComplete) {
        return (<InterestItem
        key={item.id}
        id={item.id}
        title={item.title}
        link={item.link}
        type={item.type}
        isComplete={item.isComplete}
        updateIsComplete={updateIsComplete}
        deletedState={deletedState}
        />)
      } else {
        return null
      }
    })

    const completeDetails = items.map(item => {
      
      if (this.state.interest === item.type && item.isComplete) {
        return (<InterestItem
        key={item.id}
        id={item.id}
        title={item.title}
        link={item.link}
        type={item.type}
        isComplete={item.isComplete}
        updateIsComplete={updateIsComplete}
        deletedState={deletedState}
        />)
      } else {
        return null
      }
    })

    const selectedInterest = (e) => {
      e.preventDefault();
      const newInterest = e.target.innerHTML
      fbApi.getFBData().then((data) => {
        this.setState({ items: data, interest: newInterest });
      });
    }

    if (this.state.items !== undefined) {
      return(
      <div>
        <h2>Interest Detail section</h2>
        <button onClick={selectedInterest}>Tutorial</button>
        <button onClick={selectedInterest}>Blog</button>
        <button onClick={selectedInterest}>Resource</button>
        <button onClick={selectedInterest}>Podcast</button>
        <div className='interest-container'>
          {incompleteDetails}
          {completeDetails}
        </div>
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
