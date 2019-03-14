import React from 'react';
import GroupeList from './GroupeList';

export default class Topic extends React.Component {
  constructor() {
    super();
    this.state = {
      className: 'hidden',
    }
  }
  render() {
    let groups = [];
    for (let group in this.props.topic) {
      groups.push(group);
    }

    return (
      <div>
        <div onClick={this.toggleGroupe.bind(this)}>> {this.props.name}</div>
        <div className={this.state.className} >
          <GroupeList groups={groups}/>
        </div>
      </div>
    );
  }

  toggleGroupe = () => {
    this.setState({
      className: this.state.className === 'hidden' ? "show" : "hidden"
    })
  }
}

