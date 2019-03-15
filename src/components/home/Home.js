import React, { PureComponent } from 'react';
import TweetForm  from './TweetForm';
import Tweet from '../profile/Tweet';
import styles from './Home.css';
import PropTypes from 'prop-types';

export default class Home extends PureComponent {


    static propTypes = {
        tweets: PropTypes.array.isRequired,
        fetchTweets: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.fetchTweets();
    }
    render() {
        const onChange = () => {
            return console.log('changed');
        };
        console.log(this.props.tweets);
      
        const tweetList = this.props.tweets.map(tweet => {
            return <Tweet tweet={tweet} key={tweet.id}/>;
      
        });
        return (
            <main className={styles.Home}>
                <section id={styles.form}>
                    <TweetForm onChange={onChange}  term={'some term'}/>
                </section>
                <section>
                    {tweetList}
                </section>
            </main>
        );
    }
}

