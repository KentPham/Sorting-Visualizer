import React, {Component} from 'react';
import "./Home.css";
import Visualizer from "../visualizer";
import { bubblesort } from "../sorts/Bubblesort";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nums: [],
            highlighted: [],
            maxSampleSize: 10,
            delay: 1,
            finished: 0
        }

        this.handleRandomClick = this.handleRandomClick.bind(this);
        this.handleMaxSampleSizeInput = this.handleMaxSampleSizeInput.bind(this);
        this.handleBubbleSort = this.handleBubbleSort.bind(this);
        this.handleSelectSort = this.handleSelectSort.bind(this);
        this.handleInsertionSort = this.handleInsertionSort.bind(this);
        this.handleTestSort = this.handleTestSort.bind(this);
    }

    generateHighlight(nums) {
        let temp = [...nums];
        for (let i = 0; i < nums.length; i++) {
            temp[i] = 0;
        }
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

    handleTestSort() {
        bubblesort(this.state.nums);
    }

    handleBubbleSort() {
        let sorted = this.state.nums;
        let highlight = this.state.highlighted;
        let end = sorted.length - 1;
        let temp;

        this.generateHighlight(this.state.nums);

        let bubbleSort = (i) => {
            if (i > end) {
                for (let j = 0; j < highlight.length; j++) {
                    highlight[j] = 0;
                }
                this.setState({highlighted: highlight});
                return;
            } else if (i > end - 1) {
                i = 0;
                end--;
            }

            for (let j = 0; j < highlight.length; j++) {
                highlight[j] = 0;
            }
            highlight[i] = 1;
            highlight[i+1] = 1;


            if (sorted[i] > sorted[i+1]) {
                temp = sorted[i];
                sorted[i] = sorted[i+1];
                sorted[i+1] = temp;
                this.setState({nums: sorted});
            }

            this.setState({highlighted: highlight});
            i++;
            setTimeout(() => bubbleSort(i), this.state.delay);
        }

        bubbleSort(0);
    }

    handleSelectSort() {
        let sorted = this.state.nums;
        let highlight = this.state.highlighted;
        let temp;
        let index;

        this.generateHighlight(this.state.nums);

        /*let findIndex = (i, ind) => {
            if (i > sorted.length - 1) {
                for (let j = 0; j < highlight.length; j++) {
                    highlight[j] = 0;
                }
                highlight[ind] = 1;
                this.setState({highlighted: highlight});
                return ind;
            }

            for (let j = 0; j < highlight.length; j++) {
                highlight[j] = 0;
            }
            highlight[i] = 2;

            if (sorted[i] < sorted[ind]) {
                ind = i;
                highlight[i] = 1;
            }

            this.setState({highlighted: highlight});
            i++;
            //setTimeout(() => i++, this.state.delay);
            return findIndex(i, ind);
        }*/

        let findIndex = (i, ind) => {
            for (let j = 0; j < highlight.length; j++) {
                highlight[j] = 0;
            }
            if (i > sorted.length - 1) {
                highlight[ind] = 1;
                this.setState({highlighted: highlight});
                return ind;
            }

            console.log(sorted);
            console.log(i);
            console.log("Pre")
            console.log(ind);
            console.log(sorted[i] < sorted[ind]);

            highlight[i] = 2;

            if (sorted[i] < sorted[ind]) {
                ind = i;
                highlight[i] = 1;
            }

            console.log("Post")
            console.log(i);
            console.log(ind);

            this.setState({highlighted: highlight});
            i++;
            setTimeout(() => ind = findIndex(i, ind), this.state.delay);
            return ind;
        }
        
        let selectSort = (i) => {
            if (i > sorted.length - 1) {
                for (let j = 0; j < highlight.length; j++) {
                    highlight[j] = 0;
                }
                this.setState({highlighted: highlight});
                return;
            }
            
            console.log("Current select sort index: " + i);
            index = findIndex(i, i);
            console.log("Solution: " + index);
            console.log("-------------------");
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
        let highlight = this.state.highlighted;
        let temp;
        let index;

        this.generateHighlight(this.state.nums);

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
                for (let j = 0; j < highlight.length; j++) {
                    highlight[j] = 0;
                }
                this.setState({highlighted: highlight});
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
            <div class="container body-container">
                <div class="row home-flex">
                    <div class="col-6 col-flex">
                        <span>Array Size: </span>
                        <input type="number" value={this.state.maxSampleSize} onChange={this.handleMaxSampleSizeInput} />
                        <button class="visualizer-button-format" onClick={this.handleRandomClick}>Randomize</button>
                    </div>
                    <div class="col-6 col-flex">
                        <button class="visualizer-button-format" onClick={this.handleTestSort}>Bubble</button>
                        <button class="visualizer-button-format" onClick={this.handleSelectSort}>Select</button>
                        <button class="visualizer-button-format" onClick={this.handleInsertionSort}>Insertion</button>
                    </div>
                </div>
                <Visualizer array={this.state.nums} highlighted={this.state.highlighted} />
            </div>
        )
    }

}

export default Home;