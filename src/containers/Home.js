import { connect } from 'react-redux';
import Home from '../components/home/Home';
import { getTweetsActions } from '../actions/Tweets';
import { getAllTweets } from '../selectors/Tweets';



const mapStateToProps = state => ({
    tweets: getAllTweets(state)
});

const mapDispatchToProps = dispatch => ({
    fetchTweets() {
        dispatch(getTweetsActions());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
