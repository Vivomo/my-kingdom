import React from 'react';
import './index.scss'

import {getCfg} from './config';

const Building = (props) => {
    let planeStyle = {
        marginLeft: props.marginLeft + 'px',
        marginTop: props.marginTop + 'px',
        width: props.width2D + 'px',
        height: props.height2D + 'px',
        fontSize: props.height + 'px',
        color: props.color
    };
    let cfg = getCfg(props.name);
    return (
        <div style={planeStyle} className={`building ${cfg.hover ? cfg.hover.className : ''}`}>
            <div className="wall front">
                <div className="inner-box">
                {
                    cfg.type ?
                        <i className={`iconfont mark ${cfg.content}`}/>
                        :
                        null
                }
                </div>
            </div>
            <div className="wall back"><div className="inner-box"> </div></div>
            <div className="wall up">
                <a href={props.href} target="_blank" rel="noopener noreferrer" className="link inner-box">{props.title}</a>
            </div>
            <div className="wall bottom"><div className="inner-box"> </div></div>
            <div className="wall left"><div className="inner-box"> </div></div>
            <div className="wall right"><div className="inner-box"> </div></div>
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