import React from 'react';

export default class RoomHeader extends React.Component {
  render() {
    return (
      <div className="roomHeader">
        <div className="roomTitleContainer">
          <img src="../images/icon_topic.png" className="topicHeaderIcon"/>
          <span className="topicNameArea">
            Topic Title
          </span>
          <img src="../images/icon_write.png" className="topicHeaderIcon"/>
        </div>
        <div className="roomHeaderMenu">
          <img src="../images/icon_group.png" className="topicHeaderIcon"/>
          <div onClick={this.props.changeFlg.bind(this)}>
            <img src="../images/icon_delete.png" className="topicHeaderIcon"/>
          </div>
          <button className="shareButton">共有</button>
        </div>
      </div>
    );
  }
}

