import React from 'react';
import PostIt from '../postIt/PostIt';
import { firebaseDB } from '../../firebase';
import memo from '../../images/memo.png';

export default class CurrentGroupeList extends React.Component {
    constructor() {
        super();
        this.state ={
            groupeList: undefined,
        }
    }

    componentWillMount() {
        let teamRef = firebaseDB.ref('team1/topic1/GroupeA');
        teamRef.on('value', snapshot => {
            const groupeList = snapshot.val();
            this.setState({
                groupeList
            });
        })
    }   

    render() {
        if (this.state.groupeList == undefined) return null;

        let postIts = []; 
        for (let groupe in this.state.groupeList) {
            postIts.push(groupe);
        }

        let index = 0;
        postIts = postIts.map(postIt => {
            index++;

            return (
                <PostIt postIt={this.state.groupeList[postIt]} index={index} name={postIt} />
            );
        })

        return (
            <div className="currentGroupeList">
                <span className="view">一覧へ</span>
                <img src={memo} alt="" className="memo"></img>
                {postIts}
            </div>
        );
    }
}