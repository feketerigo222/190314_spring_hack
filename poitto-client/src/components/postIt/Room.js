import React from 'react';
import TopicList from './TopicList';
import RoomHeader from './RoomHeader';
import { firebaseDB } from '../../firebase';
import GroupeManagement from './GroupeManagement';



export default class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        teamList: undefined,
        currentTopicName: "topic1",
        currentTopic: undefined
    }
  }
  
    componentWillMount() {
        let teamRef = firebaseDB.ref('team1');
        teamRef.on('value', snapshot => {
            const teamList = snapshot.val();
            let currentTopicName;

            // for (let team in teamList) {
            //     console.log(team)
            //     if (currentTopicName === undefined) this.setState({currentTopicName: team});
            // }

            let currentTopic = teamList[this.state.currentTopicName];
            this.setState({
                teamList,
                currentTopic
            });
        })
    }   

    render() {
        if (!this.state.teamList) return null;
        
        return (
            <div className="room_main">
                <RoomHeader className="roomHeader"/>
                <TopicList team={this.state.teamList} className="topicList"/>
                <GroupeManagement currentTopic={this.state.currentTopic} className="groupeManagement"/>
            </div>
        );
    }
}

