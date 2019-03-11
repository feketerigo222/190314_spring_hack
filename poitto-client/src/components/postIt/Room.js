import React from 'react';
import TopicList from './TopicList';
import RoomHeader from './RoomHeader';
import { firebaseDB } from '../../firebase';
import GroupeManagement from './GroupeManagement';



export default class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      team: undefined,
      currentTopic: undefined
    }
  }
  
  componentWillMount() {
    let teamRef = firebaseDB.ref('team1');

    teamRef.on('value', snapshot => {
      const teamList = snapshot.val();
      let currentTopic;

      for (let team in teamList) {
        if (currentTopic === undefined) currentTopic = teamList[team];
      }

      this.setState({
        team: teamList,
        currentTopic
      });
    })
  }

  render() {
    if (!this.state.team) return null;
    return (
      <div className="room_main">
        <RoomHeader className="roomHeader"/>
        <TopicList team={this.state.team} className="topicList"/>
        <GroupeManagement currentTopic={this.state.currentTopic} className="groupeManagement"/>
      </div>
    );
  }
}

