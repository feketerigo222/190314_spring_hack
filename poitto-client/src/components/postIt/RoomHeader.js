import React from 'react';

export default class RoomHeader extends React.Component {
  render() {
    return (
      <div className="roomHeader">
        <div className="titleContainer">
          Topic Title
        </div>
        <div className="headerMenu">
          <button>共有</button>
        </div>
      </div>
    );
  }
}

