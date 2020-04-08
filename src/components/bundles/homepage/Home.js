import React, {Component} from 'react';
import Visualizer from "../visualizer";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nums: []
        }
        this.handleRandomClick = this.handleRandomClick.bind(this);
    }

    handleRandomClick() {
        let rand;
        let tempNums = [];

        for (let i = 0; i < 200; i++) {
            rand = Math.round(1 + Math.random() * 100);
            tempNums = [...tempNums, rand]
        }

        this.setState({nums: [...tempNums]})
    }
    render () {

        console.log(this.state.nums);
        
        return(
            <div>
                <h1>This is the home page</h1>
                <button onClick={this.handleRandomClick}>Randomize Array</button>
                <Visualizer array={this.state.nums} />
            </div>
        )
    }

}

export default Home;