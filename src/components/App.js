import React, { PureComponent } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import FollowersPage from './FollowersPage';
import PersonalTweetsPage from './PersonalTweets/PersonalTweetsPage';
import Callback from '../containers/Callback';
import  { withSession }  from '../containers/WithSession';
import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';



export default class App extends PureComponent {
 
  render() {
    return (
      <>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={withSession(Home)} />
          <Route path="/profile" component={PersonalTweetsPage} />
          <Route path="/followers" component={FollowersPage} />
          <Route path="/callback" component={Callback} />
        </div>
      </Router>
      <Footer />
      </>
    );
  }

}
