import React from 'react';
import './index.scss'

const Building = (props) => {
    let planeStyle = {
        left: typeof props.left === 'string' ? props.left : props.left + 'px',
        top: typeof props.top === 'string' ? props.top : props.top + 'px',
        width: props.width2D + 'px',
        height: props.height2D + 'px',
        fontSize: props.height + 'px',
        color: props.color
    };
    return (
        <div style={planeStyle} className="building">
            <div className="wall front"><div className="inner-box"> 前</div></div>
            <div className="wall back"><div className="inner-box"> 后</div></div>
            <div className="wall up"><div className="inner-box"> 上</div></div>
            <div className="wall bottom"><div className="inner-box"> 下</div></div>
            <div className="wall left"><div className="inner-box"> 左</div></div>
            <div className="wall right"><div className="inner-box"> 右</div></div>
        </div>
    );
};

Building.defaultProps = {
    width2D: 120,
    height2D: 80,
    height: 320,
    left: 0,
    top: 0,
    color: '#119b11',
};

export default Building;