import React from 'react';
import Building from '../building';

import './index.scss';

const Ground = (props) => {
    let style = {
        transform: `translate3d(${props.translateX}px, ${props.translateY}px, ${props.translateZ}px)
         rotateX(${props.rotateX}deg) rotateY(0deg) rotateZ(${props.rotateZ}deg)`
    };

    return (
        <div className="ground" style={style}>
            {
                props.buildings.map((building, index) => (
                    <Building key={index} {...building}/>
                ))
            }
        </div>
    );
};

export default Ground;