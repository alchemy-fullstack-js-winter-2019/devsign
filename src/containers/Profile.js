import { connect } from 'react-redux';
import Profile from '../components/profile/Profile';
import { getUserTweetsAction } from '../actions/Tweets';
import { getUserTweets } from '../selectors/Tweets';



const mapStateToProps = state => ({
    tweets: getUserTweets(state)
});

const mapDispatchToProps = dispatch => ({
    fetchTweets() {
        dispatch(getUserTweetsAction());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
