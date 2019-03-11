import React from 'react';
import GroupeList from './GroupeList';

export default class Topic extends React.Component {
  render() {
    let groups = [];
    for (let group in this.props.topic) {
      groups.push(group);
    }

    console.log(this.props.topic)
    return (
      <div>
        <div onClick="">> {this.props.name}</div>
        <GroupeList groups={groups}/>
      </div>
    );
  }
}

