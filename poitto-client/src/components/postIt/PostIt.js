import React from 'react';

export default class PostIt extends React.Component {
  render() {
    return (
      <div>
          {this.props.postIt}
      </div>
    );
  }
}

