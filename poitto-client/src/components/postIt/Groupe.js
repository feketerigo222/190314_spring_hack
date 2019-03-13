import React from 'react';
import PostIt from './PostIt';

export default class GroupeManagement extends React.Component {
  render() {
    let postIts = [];
    let index = 0;
    for (let postIt in this.props.groupe) {
      postIts.push(<PostIt postIt={this.props.groupe[postIt]} index={index} name={postIt}/>);
      index++;
    }

    return (
      <div>
        <div>{this.props.name}</div>
        <div>{postIts}</div>
      </div>
    );
  }
}