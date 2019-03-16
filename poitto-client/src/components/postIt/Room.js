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
        currentTopic: undefined,
        delFlg: false,
        path: 'team1'
    }
  }
  
    componentWillMount() {
        let teamRef = firebaseDB.ref('team1');
        teamRef.on('value', snapshot => {
            const teamList = snapshot.val();
            let currentTopicName;
            console.log(teamList);

            // for (let team in teamList) {
            //     console.log(team)
            //     if (currentTopicName === undefined) this.setState({currentTopicName: team});
            // }

            let currentTopic = teamList[this.state.currentTopicName];
            this.setState({
                teamList,
                currentTopic
            });
        });

        teamRef.on('child_added', snapshot => {
            const teamList = snapshot.val();
            console.log(teamList)
        })
    }

    render() {
        if (!this.state.teamList) return null;
        console.log(this.state.delFlg)
        return (
            <div className="room_main">
                <div className="room_left_container">
                    <TopicList team={this.state.teamList}/>
                </div>
                <div className="room_right_container">
                    <RoomHeader changeFlg={this.changeFlg}/>
                    <GroupeManagement currentTopic={this.state.currentTopic} delFlg={this.state.delFlg} path={this.state.path} currentTopicName={this.state.currentTopicName}/>
                </div>
            </div>
        );
    }

    changeFlg = () => {
        this.setState({
            delFlg: this.state.delFlg ? false : true,
        })
    }
}

