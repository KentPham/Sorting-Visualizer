import React, {Component} from 'react';
import "./Visualizer.css";

class Visualizer extends Component {

    selectColour = (index, barWidth, barHeight, yTranslate) => {
        let selection;

        if (this.props.highlighted[index] === 1) {
            selection = {
                backgroundColor: `green`,
                width: `${barWidth}px`,
                height: `${barHeight}px`,
                transform: `translate(2.5px, ${yTranslate}px)`
            }
        } else if (this.props.highlighted[index] === 2) {
            selection = {
                backgroundColor: `yellow`,
                width: `${barWidth}px`,
                height: `${barHeight}px`,
                transform: `translate(2.5px, ${yTranslate}px)`
            }
        } else {
            selection = {
                backgroundColor: `red`,
                width: `${barWidth}px`,
                height: `${barHeight}px`,
                transform: `translate(2.5px, ${yTranslate}px)`
            }
        }
        return selection;
    }

    generateBars = () => {
        let barHeight;
        let yTranslate;

        let barStyle;
        let numberStyle;

        let barWidth = 990/this.props.array.length;

        let bars = this.props.array.map ((m, index) => {
            
            barHeight = (m/Math.max(...this.props.array))*490;
            yTranslate = 495 - barHeight;

            barStyle = this.selectColour(index, barWidth, barHeight, yTranslate);
            
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

        return bars;
    }
    
    render () {
        let bars = this.generateBars();
        
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