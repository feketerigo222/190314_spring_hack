import React from 'react';

export default class PostIt extends React.Component {
    sdb;

    render() {
        //if (this.sdb == undefined) return null;
        return (
            <div className="postIts">
                <img src={this.props.postIt} className="postIt" alt=""/>
            </div>
        );
    }
}

