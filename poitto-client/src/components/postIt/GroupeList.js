import React from 'react';
import GroupeName from './GroupeName';

export default class GroupeList extends React.Component {
  render() {
    let groups = this.props.groups.map(group => {
      return (
        <GroupeName name={group}/>
      );
    })

    return (
      <li>
        {groups}
      </li>
    );
  }
}

