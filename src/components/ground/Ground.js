import React, {useEffect, useRef} from 'react';
import Building from '../building';

import './index.scss';

const Ground = (props) => {
    let style = {
        transform: `translate3d(${props.translateX}px, ${props.translateY}px, ${props.translateZ}px)
         rotateX(${props.rotateX}deg) rotateY(0deg) rotateZ(${props.rotateZ}deg)`
    };

    let dataWrap = useRef(null);

    useEffect(() => {
        dataWrap.current.addEventListener('mousewheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
            e.stopPropagation();
        })
    }, []);

    return (
        <div className="ground" style={style}>
            <ol className="data-list" ref={dataWrap}>
                {
                    [...props.buildings].reverse().map((building) => (
                        <li key={building.name} className="data-link-wrap">
                            <a href={building.href} target="_blank" rel="noopener noreferrer" className="data-link">
                                {building.title}
                            </a>
                        </li>
                    ))
                }
            </ol>
            <div className="building-wrap">
            {
                props.buildings.map((building) => (
                    <Building key={building.name} {...building}/>
                ))
            }
            </div>
        </div>
    );
};

export default Ground;