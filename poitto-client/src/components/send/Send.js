import React from 'react';
import PostIt from './PostIt'
import CurrentGroupeList from './CurrentGroupeList';

export default class GroupeList extends React.Component {
  render() {

    return (
      <div>
        <CurrentGroupeList />
        <PostIt />
      </div>
    );
  }
}

