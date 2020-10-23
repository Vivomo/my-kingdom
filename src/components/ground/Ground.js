import React from 'react';
import Building from '../building';

import './index.scss';

const Ground = (props) => {
    let style = {
        transform: `translate3d(10%, 20%, -800px) rotateX(60deg) rotateY(0deg) rotateZ(${props.offsetX / 4}deg)`
    };
    return (
        <div className="ground" style={style}>
            <Building></Building>
        </div>
    );
};

export default Ground;