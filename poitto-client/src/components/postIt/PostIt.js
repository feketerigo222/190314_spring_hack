import React from 'react';

export default class PostIt extends React.Component {
  render() {
      console.log(this.props.postIt)
    return (
      <div>
          {this.props.postIt}
      </div>
    );
  }
}

