import React from 'react';
import PostIt from './PostIt';
import _ from 'lodash';
import Sortable from 'sortablejs';
import $ from 'jquery';

export default class GroupeManagement extends React.Component {
  componentWillReceiveProps(nextProps) {
      let newGroupe = Object.keys(this.props.groupe).length === Object.keys(nextProps.groupe).length ?
        false : Object.keys(nextProps.groupe).length -1;
      let key = Object.keys(nextProps.groupe)[newGroupe];

      if (_.isNumber(newGroupe)) this.animation(nextProps.groupe[key]);

      return true
  }

  componentDidMount () {
    const sortableId = this.props.name;
    let sortable = Sortable.create($(`.${sortableId}`)[0], {
      group: {
        name: "postIt"
      },
      animation: 100
  });
  }

  render() {
    let className = this.props.name == "other" ? "otherGroupe" : "group";
    let name = this.props.name == "other" ? "" : this.props.name;
    let postIts = [];
    let index = 0;
    for (let postIt in this.props.groupe) {
      let path = `${this.props.path}/${postIt}`;
      postIts.push(<PostIt postIt={this.props.groupe[postIt]} index={index} name={postIt} delFlg={this.props.delFlg} path={path}/>);
      index++;
    }

    return (
      <section className={className}>
        <h3>
          <span className="groupTitle">{name}</span>
        </h3>
        <article className={`postItBoss ${this.props.name}`}>{postIts}</article>
      </section>
    );
  }

  animation = (postIt) => {
    console.log(postIt)
  }
}