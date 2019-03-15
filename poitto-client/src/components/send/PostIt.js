import React from 'react';
import { firebaseDB } from '../../firebase';
import penki from '../../images/penki.png';
// import upload from '.././../images/upload.png';

export default class PostIt extends React.Component {
    constructor() {
        super();
        let teamRef = firebaseDB.ref('team1/topic1/GroupeA');
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
        this.sdb.fill("#FFA5D2");
        this.sdb.ev.on('save', curImg => {
            this.curImg = curImg;
        });
    }
    
    render() {
        const colors = ["#FFA5D2", "#FFD9A5", "#FFF5A5", "#C1FFA5", "#A5FFF5", "#A5D5FF", "#CFA5FF"];
        let colorChange = colors.map(color => {
            return (
                <button onClick={this.colorChange.bind(this, color)}></button>
            );
        });

        return (
          <div className="pictIt">
              <canvas id="canvas"></canvas>
              <div className="changeColor">
              <img src={penki} alt=""></img>
              {colorChange}
              <button onClick={this.clearCanvas}>
              {/* <img src={upload} alt="" className="upload"></img> */}
              </button>
              <button onClick={this.setImg}>send</button>
              </div>
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

