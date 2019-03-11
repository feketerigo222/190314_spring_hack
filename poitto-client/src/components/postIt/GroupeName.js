import React from 'react';

export default class GroupeName extends React.Component {
  render() {
      console.log(this.props.name)
    return (
        <div>{this.props.name}</div>
    );
  }
}

