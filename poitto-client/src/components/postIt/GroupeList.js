import React, { Component } from 'react';

export default class GroupeList extends React.Component {
  render() {
    return (
      <div>
        <div onClick="this.props.changeTopic()">> {this.props.topic}</div>
        <div>
          <GroupeList />
        </div>
      </div>
    );
  }
}

