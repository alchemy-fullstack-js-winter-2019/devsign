import React, { PureComponent } from 'react';
import Tweet from './Tweet';
import styles from './Profile.css';
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
        const tweetList = this.props.tweets.map(tweet => {
            return <Tweet tweet={tweet} key={tweet.id}/>;
      
        });
        return (
            <main className={styles.Home}>
                <section>
                    <figure>
                        <img id={styles.banner} src="https://via.placeholder.com/600X400" alt="banner"/>
                    </figure>
                </section>
                <section id={styles.about}>
                    <figure>
                        <img src="https://via.placeholder.com/150" alt="profile photo"/>
                    </figure>
                    <p>Followers: 30
                    Tweets: 30
                    Following: 30</p>
                </section>
                <section id={styles.tweets}>
                    {tweetList}
                </section>
            </main>
        );
    }
}


