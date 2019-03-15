import React from 'react';
import Groupe from './Groupe';
import penki from '../../images/penki.png';

export default class GroupeManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTopic: props.currentTopic,
      currentTopicName: props.currentTopicName,
    }
  }

  render() {
        let groups = [];
        console.log(this.state.currentTopicName)
        for (let groupe in this.props.currentTopic) {
          let path = `${this.props.path}/${this.state.currentTopicName}/${groupe}`;
          groups.push(<Groupe groupe={this.props.currentTopic[groupe]} name={groupe} delFlg={this.props.delFlg} path={path}/>);
    }

    return (
        <div className="groupeManagement">
            {groups}
        </div>
    );
  }
}

