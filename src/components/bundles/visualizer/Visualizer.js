import React, {Component} from 'react';
import "./Visualizer.css";

class Visualizer extends Component {

    render () {

        let nums = [3, 4, 1, 7, 2, 1, 3, 1];
        
        let barheight;
        let barwidth = 990/nums.length

        /*let barstyle = {
            width: `${barwidth}`
        };*/

        let barstyle;

        let bars = nums.map (function(m) {
            
            barheight = (m/Math.max(...nums))*490;

            barstyle = {
                width: `${barwidth}px`,
                height: `${barheight}px`
            }

            return (
            <div className="bar" style={barstyle}>{m}</div>
            )
        })

        console.log(bars);

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