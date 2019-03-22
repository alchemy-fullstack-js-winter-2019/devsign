import React, { PureComponent } from 'react';
import PersonalTweetList from './PersonalTweetList';

const tweets = [
  { id: 94, userName: 'tay', img: 'http://i.pravatar.cc/1000', bio: 'Hobbis include...', followsYou: true, userLink:'', },
  { id: 90, userName: 'tay', img: 'http://i.pravatar.cc/1000', bio: 'Hobbis include...', followsYou: true, userLink:'', },
  { id: 99, userName: 'tay', img: 'http://i.pravatar.cc/1000', bio: 'Hobbis include...', followsYou: true, userLink:'', },
  { id: 76, userName: 'tay', img: 'http://i.pravatar.cc/1000', bio: 'Hobbis include...', followsYou: true, userLink:'', }
];

export default class PersonalTweetsPage extends PureComponent {
  render() {
    return (
      <PersonalTweetList tweets={tweets} />
    );
  }
}
