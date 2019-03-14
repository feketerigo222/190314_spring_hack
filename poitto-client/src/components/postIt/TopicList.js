import React from 'react';
import Topic from './Topic';

export default class TopicList extends React.Component {
  render() {
    let topicList = [];
    for ( let topic in this.props.team) {
        topicList.push(<Topic topic={this.props.team[topic]} name={topic} changeTopic={this.props.changeTopic}/>);
    }

    return (
      <div className="topicList">
        <div className="teamListTop">
          <img src="../images/icon.png" className="topicTeamIcon"/>
          <h3>
            Topic Name
          </h3>
        </div>
        {topicList}
      </div>
    );
  }
}

