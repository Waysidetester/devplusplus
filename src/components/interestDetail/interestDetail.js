import React from 'react';
import PropTypes from 'prop-types';
import fbApi from '../../helpers/data/fbApi/fbApi';
import $ from 'jquery';
import './interestDetail.scss';

class InterestDetail extends React.Component {
  static propTypes = {
    authState: PropTypes.bool,
  }

  state = {
    items: undefined,
  }

  componentDidMount() {
    fbApi.getFBData().then((data) => {
      this.setState({ items: data });
    })
  }

  render() {
    const details = () => {
      let domString = '';
      $.each(this.state.items, (key, value) => {
        console.log(value);
        domString +=<div>
          <p>{value.title}</p>
          <p><a href={value.link}>{value.link}</a></p>
          <button className="btn btn-danger">X</button>
        </div>
      });
      
      return <div>{domString}</div>;
    };

    if (this.state.items !== undefined) {
      return(
      <div>
        <h2>Interest Detail section</h2>
        {details()}
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
