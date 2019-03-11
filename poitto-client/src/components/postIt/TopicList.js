import React, { Component } from 'react';
import Topic from './Topic';

export default class TopicList extends React.Component {
  render() {
    let topicList = [];
    for ( let key in this.props.team) {
        topicList.push(<Topic topic={topicList[key]} name={key} changeTopic={this.props.changeTopic}/>)
    }

    return (
      <div>
          {topicList}
      </div>
    );
  }
}

