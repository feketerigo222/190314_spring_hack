import React, { Component } from 'react';

export default class Topic extends React.Component {
  render() {
    return (
      <div>
        <div onClick="">> {this.props.name}</div>
        <div>
          <GroupeList changeTopic={this.props.changeTopic} Topic={this.props.topic}/>
        </div>
      </div>
    );
  }
}

