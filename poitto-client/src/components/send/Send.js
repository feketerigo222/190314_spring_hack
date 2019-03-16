import React from 'react';
import PostIt from './PostIt'
import CurrentGroupeList from './CurrentGroupeList';
import yajirushi from './../../images/yajirushi.png';
import $ from 'jquery';

export default class Send extends React.Component {
  render() {
   
    return (
      <>
      <div className="Send" id='main'>
        <CurrentGroupeList />
        <PostIt />
      </div>
        <section id="OpenMenu">
        <img src={yajirushi} alt="" className="yajirushi"></img>
        </section>
        <section id="add">Add</section>
        </>
    );
  }
}