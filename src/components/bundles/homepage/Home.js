import React, {Component} from 'react';
import Visualizer from "../visualizer";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nums: [],
            maxSampleSize: 10,
            delay: 500,
            finished: 0
        }

        this.handleRandomClick = this.handleRandomClick.bind(this);
        this.handleMaxSampleSizeInput = this.handleMaxSampleSizeInput.bind(this);
        this.handleBubbleSort = this.handleBubbleSort.bind(this);
        this.handleSelectSort = this.handleSelectSort.bind(this);
        this.handleInsertionSort = this.handleInsertionSort.bind(this);
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

    handleBubbleSort() {
        let sorted = this.state.nums;
        let end = sorted.length - 1;
        let temp;

        let bubbleSort = (i) => {
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
            setTimeout(() => bubbleSort(i), this.state.delay);
        }

        bubbleSort(0);
    }

    handleSelectSort() {
        let sorted = this.state.nums;
        let temp;
        let index;

        let findIndex = (i, ind) => {
            if (i > sorted.length - 1) {
                return ind;
            }

            if (sorted[i] < sorted[ind]) {
                ind = i;
            }

            i++;
            return findIndex(i, ind);
        }
        
        let selectSort = (i) => {
            if (i > sorted.length - 1) {
                return;
            }
            
            index = findIndex(i, i);
            if (index !== i) {
                temp = sorted[i];
                sorted[i] = sorted[index];
                sorted[index] = temp;
                this.setState({nums: sorted});
            }

            i++;
            setTimeout(() => selectSort(i), this.state.delay);
        }

        selectSort(0);
    }

    handleInsertionSort() {
        let sorted = this.state.nums;
        let temp;
        let index;

        if (sorted[1] < sorted[0]) {
            temp = sorted[1];
            sorted[1] = sorted[0];
            sorted[0] = temp;
        }

        let findIndex = (i, end) => {
            if (i > end) {
                return i;
            }

            if (sorted[end] < sorted[i]) {
                return i;
            }

            i++;
            return findIndex(i, end)
        }

        let pushElements = (i, index) => {
            if (i < index) {
                return;
            }

            sorted[i] = sorted[i-1];
            this.setState({nums: sorted});

            i--;
            return pushElements(i, index);
        }

        let insertionSort = (i) => {
            if (i > sorted.length - 1) {
                return;
            }
            if (sorted[i] < sorted[i-1]) {
                index = findIndex(0, i);
                temp = sorted[i];
                pushElements(i, index);
                sorted[index] = temp;
                this.setState({nums: sorted});
            }

            i++;
            setTimeout(() => insertionSort(i), this.state.delay);
        }

        insertionSort(2);
    }

    render () {

        return(
            <div>
                <input type="number" value={this.state.maxSampleSize} onChange={this.handleMaxSampleSizeInput} />
                <button onClick={this.handleRandomClick}>Randomize Array</button>
                <button onClick={this.handleBubbleSort}>Bubble Sort</button>
                <button onClick={this.handleSelectSort}>Select Sort</button>
                <button onClick={this.handleInsertionSort}>Insertion Sort</button>
                <Visualizer array={this.state.nums} />
            </div>
        )
    }

}

export default Home;