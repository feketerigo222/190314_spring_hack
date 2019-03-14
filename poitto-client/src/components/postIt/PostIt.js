import React from 'react';

export default class PostIt extends React.Component {
    sdb;
    componentDidMount = () => {
        const SimpleDrawingBoard = require('simple-drawing-board');
        this.sdb = new SimpleDrawingBoard(document.getElementById(`canvas_${this.props.name}_${this.props.index}`));
        this.sdb.setImg(this.props.postIt);
    }

    componentDidUpdate = () => {
        this.sdb.setImg(this.props.postIt);
    }

    render() {
        console.log(this.props.postIt)
        
        return (
            <div>
                <canvas id={`canvas_${this.props.name}_${this.props.index}`} width="100" height="100"></canvas>
            </div>
        );
    }
}

