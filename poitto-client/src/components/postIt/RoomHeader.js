import React from 'react';

export default class RoomHeader extends React.Component {
  render() {
    return (
      <div className="roomHeader">
        <div className="roomTitleContainer">
          Topic Title
        </div>
        <div className="roomHeaderMenu">
          <button className="shareButton">共有</button>
        </div>
      </div>
    );
  }
}

