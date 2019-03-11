import React from 'react';
import PostIt from './PostIt';

export default class GroupeManagement extends React.Component {
  render() {
    let postIts = [];
    for (let postIt in this.props.group) {
      postIts.push(<PostIt postIt={this.props.group[postIt]}/>)
    }

    return (
      <div>
        <div>{this.props.name}</div>
        <div>{postIts}</div>
      </div>
    );
  }
}