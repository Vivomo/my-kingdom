import React, {useState, useEffect} from 'react';
import Building from '../building';

import './index.scss';

const Ground = (props) => {
    let style = {
        transform: `translate3d(10%, 20%, -800px) rotateX(60deg) rotateY(0deg) rotateZ(${props.offsetX / 4}deg)`
    };

    let [buildings, setBuildings] = useState([]);

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push({
                width2D: 120 + 50 * Math.random(),
                height2D: 80 + 40 * Math.random(),
                height: 320 + 100 * Math.random(),
                left: `${100 * Math.random()}%`,
                top: `${100 * Math.random()}%`,
            });
        }
        arr[0].left = 0;
        arr[0].top = 0;
        setBuildings(arr);
    }, []);

    return (
        <div className="ground" style={style}>
            {
                buildings.map((building, index) => (
                    <Building key={index} {...building}/>
                ))
            }
        </div>
    );
};

export default Ground;