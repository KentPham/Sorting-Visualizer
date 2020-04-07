import React, {Component} from 'react';
import "./Visualizer.css";

class Visualizer extends Component {

    render () {

        let nums = [];
        let barHeight;
        let yTranslate;

        let barStyle;

        let rand;

        for (let i = 0; i < 400; i++) {
            rand = Math.round(1 + Math.random() * 100);
            nums = [...nums, rand]
        }

        let barWidth = 990/nums.length;

        let bars = nums.map (function(m) {
            
            barHeight = (m/Math.max(...nums))*490;
            yTranslate = 495 - barHeight;

            barStyle = {
                width: `${barWidth}px`,
                height: `${barHeight}px`,
                transform: `translate(2.5px, ${yTranslate}px)`
            }

            return (
            <div className="bar" style={barStyle}></div>
            )
        })

        return(
            <div>
                <div className="container graph-container">
                    <div className="row">
                        {bars}
                    </div>
                </div>
            </div>
        )
    }

}

export default Visualizer;