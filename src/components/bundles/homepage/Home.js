import React, {Component} from 'react';
import Visualizer from "../visualizer";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nums: [],
            maxSampleSize: 200
        }

        this.handleRandomClick = this.handleRandomClick.bind(this);
        this.handleMaxSampleSizeInput = this.handleMaxSampleSizeInput.bind(this);
    }

    handleRandomClick() {
        let rand;
        let tempNums = [];

        for (let i = 0; i < this.state.maxSampleSize; i++) {
            rand = Math.round(1 + Math.random() * 100);
            tempNums = [...tempNums, rand]
        }

        this.setState({nums: [...tempNums]});
    }

    handleMaxSampleSizeInput(e) {
        let input = e.target.value;

        if (input > 400) {
            input = 400;
        }

        if (input < 1) {
            input = 1;
        }
        this.setState({maxSampleSize: input});
    }

    render () {

        return(
            <div>
                <input type="number" value={this.state.maxSampleSize} onChange={this.handleMaxSampleSizeInput} />
                <button onClick={this.handleRandomClick}>Randomize Array</button>
                <Visualizer array={this.state.nums} />
            </div>
        )
    }

}

export default Home;