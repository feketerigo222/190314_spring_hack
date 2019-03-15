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
      <dl className="topicListContainer">
        <dt onClick={this.toggleGroupe.bind(this)}>{this.props.name}</dt>
        <dd className={this.state.className} >
          <ul>
            <GroupeList groups={groups}/>
          </ul>
        </dd>
      </dl>
    );
  }

  toggleGroupe = () => {
    this.setState({
      className: this.state.className === 'hidden' ? "show" : "hidden"
    })
  }
}

