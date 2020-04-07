import React, {Component} from 'react';
import "./Visualizer.css";

class Visualizer extends Component {

    render () {

        let barHeight;
        let yTranslate;

        let barStyle;

        let barWidth = 990/this.props.array.length;

        let bars = this.props.array.map ((m) => {
            
            barHeight = (m/Math.max(...this.props.array))*490;
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