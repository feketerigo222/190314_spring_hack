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
    console.log(this.props.name);

    return (
      <div className="group">
      <span>{this.props.name}</span>
      <div className="postItBoss">{postIts}</div>      
      </div>
    );
  }
}