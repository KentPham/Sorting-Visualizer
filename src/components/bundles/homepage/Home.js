import React, {Component} from 'react';
import Visualizer from "../visualizer";
import {selectsort} from "../sorts/Selectsort";
import {bubblesort} from "../sorts/Bubblesort";
import {insertionsort} from "../sorts/Insertionsort";
import {mergesort} from "../sorts/Mergesort";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nums: [],
            maxSampleSize: 10
        }

        this.handleRandomClick = this.handleRandomClick.bind(this);
        this.handleMaxSampleSizeInput = this.handleMaxSampleSizeInput.bind(this);
        this.handleSortButton = this.handleSortButton.bind(this);
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

    handleSortButton() {
        let nums = this.state.nums;
        //let sorted = selectsort(nums);
        //let sorted = bubblesort(nums);
        //let sorted = insertionsort(nums);
        let sorted = mergesort(nums);
        this.setState({nums: sorted});
    }

    render () {

        return(
            <div>
                <input type="number" value={this.state.maxSampleSize} onChange={this.handleMaxSampleSizeInput} />
                <button onClick={this.handleRandomClick}>Randomize Array</button>
                <button onClick={this.handleSortButton}>Quicksort</button>
                <Visualizer array={this.state.nums} />
            </div>
        )
    }

}

export default Home;