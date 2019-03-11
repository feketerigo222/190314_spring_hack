import React from 'react';
import Groupe from './Groupe';

export default class GroupeManagement extends React.Component {
  render() {
      console.log(this.props.currentTopic)
      let groups = [];
      for (let group in this.props.currentTopic) {
        groups.push(<Groupe group={this.props.currentTopic[group]} name={group}/>)
      }
    return (
      <div className="groupeManagement">
          {groups}
      </div>
    );
  }
}

