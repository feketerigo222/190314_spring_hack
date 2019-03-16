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
        <article className="groupIcon">
          <img src="../images/icon_group.png" className="topicHeaderIcon"/>
          <p className="iconCaption">グループ作成</p>
        </article>
        <article className="deleteIcon">
          <img src="../images/icon_delete.png" onClick={this.props.changeFlg.bind(this)} className="topicHeaderIcon"/>
          <p className="iconCaption">削除</p>
        </article>
        <button className="shareButton">共有</button>
          <p className="buttonCaption">
            <h4>共有リンクを取得</h4>
            <input type="text" value="https://drive.google.com/drive/u/0/fold"/>
            <span>リンクを知っている全員が編集できます</span>
          </p>
        </div>
      </div>
    );
  }
}

