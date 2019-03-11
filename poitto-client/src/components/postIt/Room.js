import React, { Component } from 'react';
import TopicList from './TopicList';
import RoomHeader from './RoomHeader';
import { firebaseDB } from '../../firebase';



export default class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      team: undefined
    }
  }
  
  componentWillMount() {
    let teamRef = firebaseDB.ref('team1');
    teamRef.on('value', snapshot => {
      const teamList = snapshot.val();
      this.setState({
        team: teamList
      });
    })
  }

  render() {
    if (!this.state.team) return null;
    return (
      <div>
        <RoomHeader />
        <TopicList team={this.state.team} />
      </div>
    );
  }
}

