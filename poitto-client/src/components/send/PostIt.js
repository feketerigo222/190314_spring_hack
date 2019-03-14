import React from 'react';
import { firebaseDB } from '../../firebase';


export default class PostIt extends React.Component {
    constructor() {
        super();
        let teamRef = firebaseDB.ref('team1/topic1/GroupeB');
        this.state = {
            teamRef
        }
    }
    sdb;
    curImg;
    componentDidMount = () => {
        const SimpleDrawingBoard = require('simple-drawing-board');
        this.sdb = new SimpleDrawingBoard(document.getElementById('canvas'), {
            lineColor:    '#000',
            lineSize:     3,
        });
        this.sdb.ev.on('save', curImg => {
            this.curImg = curImg;
        });
    }
    
    render() {
        const colors = ["#FFA5D2", "#FFD9A5", "#FFF5A5", "#C1FFA5", "#A5FFF5", "#A5D5FF", "#CFA5FF"];
        let colorChange = colors.map(color => {
            return (
                <button onClick={this.colorChange.bind(this, color)}>{color}</button>
            );
        });

        return (
          <div>
              <canvas id="canvas" width="500" height="500"></canvas>
              <button onClick={this.clearCanvas}>clear</button>
              <button onClick={this.setImg}>send</button>
              {colorChange}
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

    colorChange = color => {
        console.log(color)
        this.sdb.fill(color);
    }
}

