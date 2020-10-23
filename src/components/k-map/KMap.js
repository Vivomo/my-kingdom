import React from 'react';
import Ground from '../ground';
import './index.scss';

const MIN_OFFSET = 40;
const X_DIRECTION = 0;
const Y_DIRECTION = 1;

export default class KMap extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            startX: 0,
            startY: 0,
            offsetX: 0,
            offsetY: 0,
            prevOffsetX: 180,
            prevOffsetY: 0,
            offsetDirection: null
        };
        this.kMap = React.createRef();
    }

    componentDidMount() {
        let kMap = this.kMap;

        let mousemove = (e) => {
            let {startX, startY, offsetDirection} = this.state;
            let offsetX = startX - e.pageX;
            let offsetY = startY - e.pageY;

            this.setState({
                offsetX,
                offsetY
            });

            if (offsetDirection === null) {
                if (Math.abs(offsetX) > MIN_OFFSET || Math.abs(offsetY) > MIN_OFFSET) {
                    this.setState({
                        offsetDirection: ~~(Math.abs(offsetY) > Math.abs(offsetX))
                    });
                }
            }
        };
        kMap.current.addEventListener('mousedown', (e) => {
            this.setState({
                startX: e.pageX,
                startY: e.pageY,
                offsetDirection: null
            });
            kMap.current.addEventListener('mousemove', mousemove);
        });

        kMap.current.addEventListener('mouseup', () => {
            kMap.current.removeEventListener('mousemove', mousemove);
            if (this.state.offsetDirection === X_DIRECTION) {
                this.setState({
                    prevOffsetX: this.state.prevOffsetX + this.state.offsetX,
                    offsetX: 0
                });
            } else if (this.state.offsetDirection === Y_DIRECTION) {
                this.setState({
                    prevOffsetY: this.state.prevOffsetY + this.state.offsetY,
                    offsetY: 0
                });
            }
        });
    }

    render() {
        return (
            <div className="k-map" ref={this.kMap}>
                <Ground offsetX={this.state.offsetX + this.state.prevOffsetX}/>
            </div>
        )
    }
}
