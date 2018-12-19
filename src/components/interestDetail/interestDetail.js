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

  componentDidMount() {
    fbApi.getFBData().then((data) => {
      this.setState({ items: data });
    })
  }

  render() {
    const { items } = this.state;
    const details = items.map(item => (
      <InterestItem
      key={item.id}
      title={item.title}
      link={item.link}
      isComplete={item.isComplete}
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
