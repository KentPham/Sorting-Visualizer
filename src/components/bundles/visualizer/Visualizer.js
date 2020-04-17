import React, {Component} from 'react';
import "./Visualizer.css";

class Visualizer extends Component {

    render () {

        let barHeight;
        let yTranslate;

        let barStyle;
        let numberStyle;

        let barWidth = 990/this.props.array.length;

        let bars = this.props.array.map ((m, index) => {
            
            barHeight = (m/Math.max(...this.props.array))*490;
            yTranslate = 495 - barHeight;

            if (this.props.highlighted[index] === 1) {
                barStyle = {
                    backgroundColor: `green`,
                    width: `${barWidth}px`,
                    height: `${barHeight}px`,
                    transform: `translate(2.5px, ${yTranslate}px)`
                }
            } else if (this.props.highlighted[index] === 2) {
                barStyle = {
                    backgroundColor: `yellow`,
                    width: `${barWidth}px`,
                    height: `${barHeight}px`,
                    transform: `translate(2.5px, ${yTranslate}px)`
                }
            } else {
                barStyle = {
                    backgroundColor: `red`,
                    width: `${barWidth}px`,
                    height: `${barHeight}px`,
                    transform: `translate(2.5px, ${yTranslate}px)`
                }
            }

            yTranslate = yTranslate + 30;

            numberStyle = {
                position: `absolute`,
                top: `${yTranslate}px`,
            }

            if (m > 9) {
                return (
                    <div className="bar" style={barStyle}>{ m }</div>
                )
            } else {
                return (
                    <div>
                        <span style={numberStyle}>{ m }</span>
                        <div className="bar" style={barStyle}></div>
                    </div>
                )
            }
        })

        return(
            <div className="container graph-container">
                <div className="row">
                    {bars}
                </div>
            </div>
        )
    }

}

export default Visualizer;