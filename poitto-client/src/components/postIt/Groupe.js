import React from 'react';
import PostIt from './PostIt';

export default class GroupeManagement extends React.Component {
  render() {
    let className = this.props.name == "other" ? "other" : "group";
    let name = this.props.name == "other" ? "" : this.props.name;
    let postIts = [];
    let index = 0;
    for (let postIt in this.props.groupe) {
      postIts.push(<PostIt postIt={this.props.groupe[postIt]} index={index} name={postIt}/>);
      index++;
    }

    return (
      <div className={className}>
      <span>{name}</span>
      <div className="postItBoss">{postIts}</div>      
      </div>
    );
  }
}