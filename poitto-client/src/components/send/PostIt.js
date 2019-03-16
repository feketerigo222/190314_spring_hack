import React from 'react';
import { firebaseDB } from '../../firebase';
import penki from '../../images/penki.png';
import del from '../../images/icon_119860_256.png';
import $ from 'jquery';


export default class PostIt extends React.Component {
    constructor() {
        super();
        let teamRef = firebaseDB.ref('team1/topic1/GroupeB');

        this.state = {
            teamRef
        }
    }
    sdb = [];
    curImg;
    componentDidMount = () => {
        const SimpleDrawingBoard = require('simple-drawing-board');
        this.sdb[0] = new SimpleDrawingBoard(document.getElementById('canvas'), {
            lineColor: '#000',
            lineSize: 1,
        });
        this.sdb[0].fill("#FFA5D2");
        this.sdb[0].ev.on('save', curImg => {
            this.curImg = curImg;
        });
        $('#main').on('touchstart', onTouchStart); //指が触れたか検知
        $('#main').on('touchmove', onTouchMove); //指が動いたか検知
        $('#main').on('touchend', onTouchEnd.bind(this,this.sdb)); //指が離れたか検知
        var direction, position;
      
        //スワイプ開始時の横方向の座標を格納
        function onTouchStart(event) {
          position = getPosition(event);
          direction = ''; //一度リセットする
        }
      
        //スワイプの方向（left／right）を取得
        function onTouchMove(event) {
          if (position - getPosition(event) > 70) { // 70px以上移動しなければスワイプと判断しない
            direction = 'left'; //左と検知
          } else if (position - getPosition(event) < -70){  // 70px以上移動しなければスワイプと判断しない
            direction = 'right'; //右と検知
          }
        }
      
        function onTouchEnd(sdb) {
          if (direction == 'right'){
            } else if (direction == 'left'){
                let copied = $("#canvas").clone(true);
                $("#canvas").css("animation", "poitto 0.5s");        
                $("#canvas").on('animationend', function() {
                    let img = sdb[0].getImg();
                    let teamRef = firebaseDB.ref('team1/topic1/GroupeA');
                    teamRef.push(img);
                    $("#canvas").before(copied);
                    $(this).remove();
                        sdb[0] = new SimpleDrawingBoard(document.getElementById('canvas'), {
                            lineColor: '#000',
                            lineSize: 1,
                        });
                sdb[0].fill("#FFA5D2");
                });
            }
        }
      
        //横方向の座標を取得
        function getPosition(event) {
          return event.originalEvent.touches[0].pageY;
        }
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
              </div>
              <button onClick={this.clearCanvas} className="delete">
              <img src={del} alt=""></img>
              </button>
              {/* <button onClick={this.setImg} className="sendbutton"></button> */}
          </div>
        );
    }

    clearCanvas = () => {
        this.sdb[0].clear();
    }

    setImg = () => {
        this.curImg = this.sdb[0].getImg();
        this.state.teamRef.push(this.curImg)
    }

    colorChange = color => {
        this.sdb[0].fill(color);
    }
}