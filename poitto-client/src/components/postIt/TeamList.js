import React from 'react';
import Team from './Team';

export default class TeamList extends React.Component {
  render() {
    return (
      <div className="teamListContainer">
        <div className="teamListHeader">
          <button className="teamAddButton">
          ＋
          </button>
          <span>NEW TEAM</span>
        </div>
        <ul className="teamList">
          <Team />
        </ul>
      </div>
    );
  }
}

