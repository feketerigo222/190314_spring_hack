import React from 'react';
import PostIt from './PostIt'
import CurrentGroupeList from './CurrentGroupeList';
import yajirushi from './../../images/yajirushi.png';
import $ from 'jquery';

export default class Send extends React.Component {
  render() {
    let flg = true;
    let scroll;
    $(window).scroll(() => {
      scroll = $(this).scrollTop();
      alert(scroll)
      if(flg){
        flg = false;
        setTimeout(scroll => {
          // ここに処理を書く
          //alert(scroll)
          flg = true;
          return flg;
        }, 2000);
      }
    });

    return (
      <>
      <div className="Send">
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