import React from 'react';
import { firebaseDB } from '../../firebase';

export default class PostIt extends React.Component {
    constructor(props) {
        super(props);
        let teamRef = firebaseDB.ref(props.path);

        this.state = {
            teamRef
        }
    }
    sdb;

    render() {

        return (
            <div className="postIts" onClick={this.delPostIt.bind(this)}>
                <img src={this.props.postIt} className="postIt" alt=""/>
            </div>
        );
    }

    delPostIt = () => {
        console.log(thi)
        if (!this.props.delFlg) return;

        console.log(this.props.path)
        this.state.teamRef.remove();
    }
}

