import React from 'react';
import TopicList from './TopicList';
import RoomHeader from './RoomHeader';
import { firebaseDB } from '../../firebase';
import GroupeManagement from './GroupeManagement';
import Style from '../../scss/Room.css';



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
        if (currentTopic == undefined) currentTopic = teamList[team];
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
      <div>
        <RoomHeader className={Style.roomHeader}/>
        <TopicList team={this.state.team} className={Style.topicList}/>
        <GroupeManagement currentTopic={this.state.currentTopic} className={Style.groupeManagement}/>
      </div>
    );
  }
}

