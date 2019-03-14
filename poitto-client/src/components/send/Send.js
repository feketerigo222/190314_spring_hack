import React from 'react';
import PostIt from './PostIt'
import CurrentGroupeList from './CurrentGroupeList';

export default class Send extends React.Component {
  render() {

    return (
      <div className="Send">
      <CurrentGroupeList />
        <PostIt />
      </div>
    );
  }
}

