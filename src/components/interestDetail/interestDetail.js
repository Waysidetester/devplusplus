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
      let domString = ''
      $.each(this.state.items, (key, value) => {
        domString += `
        <p>${value.title}</p>
        <p><a href="${value.link}">${value.link}</a></p>
        <button className="btn btn-danger">X</button>
        `
      })
      return domString
    }
    if (this.props.authState) {
      console.log('items', this.state.items);
      details();
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
