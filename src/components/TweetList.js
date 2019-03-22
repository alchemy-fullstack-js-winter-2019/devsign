import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FollowersTweets from './FollowersTweets';
// eslint-disable-next-line no-unused-vars
import styles from './TweetList.css';

export default class TweetList extends Component {
  static propTypes = {
    tweets: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  
  render() {
    const ListOfTweets = this.props.tweets.map(tweet => {
      return <li key={tweet._id}><FollowersTweets tweet={tweet}/></li>;
    });
    return (
      <ul>
        {ListOfTweets}
      </ul>
    );

  }
}

