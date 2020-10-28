import React from 'react';
import Ground from '../ground';
import './index.scss';
import {offsetToDegree, randomRange} from '../../utils';

const MIN_OFFSET = 30;
const Z_DIRECTION = 0;
const X_DIRECTION = 1;



export default class KMap extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            translateX: 0,
            translateY: 0,
            translateZ: -800,
            rotateX: 45,
            rotateZ: 0,
            buildings: []
        };
        this.kMap = React.createRef();
        this.cache = {
            startX: 0,
            startY: 0,
            offsetX: 0,
            offsetY: 0,
            translateX: 0,
            translateY: 0,
            rotateX: 45,
            rotateZ: 0,
            rotating: false,
            rotateDirection: null,
            translational: false
        };
    }

    initCache = () => {
        let cache = this.cache;
        cache.rotating = false;
        cache.translational = false;
        cache.offsetX = 0;
        cache.offsetY = 0;
        cache.rotateDirection = null;
    }

    /**
     * 鼠标移动相关的地图旋转逻辑
     * @param e
     */
    rotate = (e) => {
        this.updateOffset(e);

        let {offsetX, offsetY, rotateDirection} = this.cache;
        if (rotateDirection === null) {
            if (Math.abs(offsetX) > MIN_OFFSET || Math.abs(offsetY) > MIN_OFFSET) {
                this.cache.rotateDirection = ~~(Math.abs(offsetY) > Math.abs(offsetX));
                this.updateRotateState();
            }
        } else {
            this.updateRotateState();
        }
    }

    updateOffset = (e) => {
        this.cache.offsetX = this.cache.startX - e.pageX;
        this.cache.offsetY = this.cache.startY - e.pageY;
    }

    /**
     * 更新旋转数据
     */
    updateRotateState() {
        if (this.cache.rotateDirection === X_DIRECTION) {
            this.setState({
                rotateX: this.cache.rotateX + offsetToDegree(this.cache.offsetY)
            });
        } else {
            this.setState({
                rotateZ: this.cache.rotateZ + offsetToDegree(this.cache.offsetX)
            })
        }
    }

    /**
     * 地图平移逻辑
     */
    translate = (e) => {
        this.updateOffset(e);
        let {offsetX, offsetY, translateX, translateY} = this.cache;
        this.setState({
            translateX: translateX - offsetX,
            translateY: translateY - offsetY
        })
    }

    initEventListener() {
        let kMap = this.kMap;

        kMap.current.addEventListener('mousedown', (e) => {
            this.cache.startX = e.pageX;
            this.cache.startY = e.pageY;
            kMap.current.addEventListener('mousemove', e.ctrlKey ? this.rotate : this.translate);
        });

        kMap.current.addEventListener('mouseup', () => {
            let cache = this.cache;
            if (cache.rotateDirection !== null) {
                kMap.current.removeEventListener('mousemove', this.rotate);
                if (cache.rotateDirection === X_DIRECTION) {
                    cache.rotateX += offsetToDegree(cache.offsetY);
                } else if (cache.rotateDirection === Z_DIRECTION) {
                    cache.rotateZ += offsetToDegree(cache.offsetX);
                }
            } else {
                kMap.current.removeEventListener('mousemove', this.translate);
                cache.translateX -= cache.offsetX;
                cache.translateY -= cache.offsetY;
            }

            this.initCache();
        });

        kMap.current.addEventListener('mousewheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
            this.setState({
                translateZ: this.state.translateZ + (e.wheelDelta > 0 ? 80 : -80)
            })
        })
    }

    initBuildings() {
        let nameReg = /([a-z0-9-]+)\.html$/i;
        let buildings = Array.from(document.querySelectorAll('.post-list li a'))
                            .map(item => ({
                                title: item.innerText,
                                name: nameReg.exec(item.href)[1],
                                width2D: randomRange(120, 170),
                                height2D: randomRange(80, 120),
                                height: randomRange(320, 420),
                                marginLeft: randomRange(20, 100),
                                marginTop: randomRange(20, 100),
                                color: `rgb(${randomRange(50, 255)}, ${randomRange(50, 255)}, ${randomRange(50, 255)})`
                            })).reverse();
        this.setState({
            buildings
        });
        // let i = 0;
        // let interval = setInterval(() => {
        //     buildings[i].show = true;
        //     this.setState({
        //         buildings: [...buildings]
        //     });
        //     i++;
        //     if (i === buildings.length) {
        //         clearInterval(interval);
        //     }
        // }, 30);

    }

    componentDidMount() {
        this.initEventListener();
        this.initBuildings();
    }

    render() {
        return (
            <div className="k-map" ref={this.kMap}>
                <Ground
                    translateX={this.state.translateX}
                    translateY={this.state.translateY}
                    translateZ={this.state.translateZ}
                    rotateX={this.state.rotateX}
                    rotateZ={this.state.rotateZ}
                    buildings={this.state.buildings}
                />
            </div>
        )
    }
}
