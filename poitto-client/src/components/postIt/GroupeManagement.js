import React from 'react';
import Groupe from './Groupe';

export default class GroupeManagement extends React.Component {
  render() {
        let groups = [];
        for (let groupe in this.props.currentTopic) {
          groups.push(<Groupe groupe={this.props.currentTopic[groupe]}/>);
    }

    return (
        <div className="groupeManagement">
            {groups}
        </div>
    );
  }
}

