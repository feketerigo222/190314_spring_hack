import React from 'react';
import Groupe from './Groupe';
import penki from '../../images/penki.png';
import Sortable from 'sortablejs';
import $ from 'jquery';

export default class GroupeManagement extends React.Component {
  componentDidMount () {
    Sortable.create($('.groupeManagement')[0], {
      group: {
        name: "groupe"
      },
      animation: 100
  });
  }

  render() {
        let groups = [];
        for (let groupe in this.props.currentTopic) {
          groups.push(<Groupe groupe={this.props.currentTopic[groupe]} name={groupe}/>);
    }

    return (
        <div className="groupeManagement">
            {groups}
        </div>
    );
  }
}

