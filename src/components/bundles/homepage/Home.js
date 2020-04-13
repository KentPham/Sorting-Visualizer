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
            maxSampleSize: 10,
            delay: 5000,
            finished: 0
        }

        this.handleRandomClick = this.handleRandomClick.bind(this);
        this.handleMaxSampleSizeInput = this.handleMaxSampleSizeInput.bind(this);
        this.handleSortButton = this.handleSortButton.bind(this);
        this.handleBubbleSortButton = this.handleBubbleSortButton.bind(this);
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
        let sorted = mergesort(nums);
        this.setState({nums: sorted});
    }


    handleBubbleSortButton() {
        let sorted = this.state.nums;
        let end = sorted.length - 1;
        let temp;

        let recurr = (i) => {
            if (end < 0) {
                return;
            } else if (i > end) {
                i = 0;
            }

            if (sorted[i] > sorted[i+1]) {
                temp = sorted[i];
                sorted[i] = sorted[i+1];
                sorted[i+1] = temp;
                this.setState({nums: sorted});
            }

            i++;
            setTimeout(() => recurr(i), 50);
        }
        recurr(0);
    }

    render () {

        return(
            <div>
                <input type="number" value={this.state.maxSampleSize} onChange={this.handleMaxSampleSizeInput} />
                <button onClick={this.handleRandomClick}>Randomize Array</button>
                <button onClick={this.handleBubbleSortButton}>Bubble Sort</button>
                <button onClick={this.handleSortButton}>Quicksort</button>
                <Visualizer array={this.state.nums} />
            </div>
        )
    }

}

export default Home;