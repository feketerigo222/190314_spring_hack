import React from 'react';
import Groupe from './Groupe';
import penki from '../../images/penki.png';

export default class GroupeManagement extends React.Component {
  render() {
        let groups = [];
        for (let groupe in this.props.currentTopic) {
          groups.push(<Groupe groupe={this.props.currentTopic[groupe]} name={groupe}/>);
    }

    return (
        <div className="groupeManagement">
            {groups}
            {/* <img src={penki} alt=""></img> */}
        </div>
    );
  }
}

