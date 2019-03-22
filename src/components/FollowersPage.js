import React, { PureComponent } from 'react';
import FollowerList from './FollowerList';

const followers = [
  { id: 1233, userName: 'tay', img: 'http://i.pravatar.cc/1000', bio: 'Hobbis include...', followsYou: true, userLink:'', },
  { id: 123, userName: 'tay', img: 'http://i.pravatar.cc/1000', bio: 'Hobbis include...', followsYou: true, userLink:'', },
  { id: 1, userName: 'tay', img: 'http://i.pravatar.cc/1000', bio: 'Hobbis include...', followsYou: true, userLink:'', },
  { id: 13, userName: 'tay', img: 'http://i.pravatar.cc/1000', bio: 'Hobbis include...', followsYou: true, userLink:'', }
];
export default class followersPage extends PureComponent {
  render() {
    return (
      <FollowerList followers={followers} />
    );

  }
}
