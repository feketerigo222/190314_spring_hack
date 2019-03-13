import React from 'react';
import { firebaseDB } from '../../firebase';


export default class PostIt extends React.Component {
    constructor() {
        super();
        let teamRef = firebaseDB.ref('team1/topic1/groupe1');
        this.state = {
            teamRef
        }
    }
    sdb;
    curImg;
    componentDidMount = () => {
        //console.log(this.curImg);
        const SimpleDrawingBoard = require('simple-drawing-board');
        this.sdb = new SimpleDrawingBoard(document.getElementById('canvas'));
        this.sdb.ev.on('save', curImg => {
            console.log(this.curImg);
            this.curImg = curImg;
        });
    }
    
    render() {
        return (
          <div>
              <canvas id="canvas" width="500" height="500"></canvas>
              <button onClick={this.clearCanvas}>clear</button>
              <button onClick={this.setImg}>send</button>
          </div>
        );
    }

    clearCanvas = () => {
        console.log(this.curImg)
        this.sdb.clear();
    }

    setImg = () => {
        this.curImg = this.sdb.getImg();
        this.state.teamRef.push(this.curImg)
    }
}

