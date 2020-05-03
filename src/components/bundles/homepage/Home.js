import React, {Component} from 'react';
import "./Home.css";
import Visualizer from "../visualizer";
import { bubblesort } from "../sorts/Bubblesort";

class Home extends Component {

    state = {
        nums: [],
        highlighted: [],
        maxSampleSize: 10,
    }

    zeroHighlight(nums) {
        let temp = [...nums];
        for (let i = 0; i < nums.length; i++) {
            temp[i] = 0;
        }
        this.setState({ highlighted: [...temp] });
    }

    handleRandomClick = () => {
        let rand;
        let tempNums = [];

        for (let i = 0; i < this.state.maxSampleSize; i++) {
            rand = Math.round(1 + Math.random() * 100);
            tempNums = [...tempNums, rand]
        }

        this.setState({ nums: [...tempNums] });
    }

    handleMaxSampleSizeInput = (e) => {
        let input = e.target.value;

        if (input > 400) {
            input = 400;
        }
        if (input < 1) {
            input = 1;
        }

        this.setState({maxSampleSize: input});
    }

    handleTestSort = async () => {
        let timeline;
        let temp;
        let index = 0;
        const { nums } = this.state;
        this.zeroHighlight(nums);
        let highlighted = [...this.state.highlighted];
        timeline = bubblesort(nums);

        while (true) {
            this.zeroHighlight(nums);
            highlighted = [...this.state.highlighted];
            highlighted[timeline[index][0]] = 1;
            highlighted[timeline[index][1]] = 1;
            this.setState({ highlighted: [...highlighted] });
            
            await new Promise(resolve => setTimeout(resolve, 500));

            if (timeline[index][2] === 1) {
                temp = nums[timeline[index][0]];
                nums[timeline[index][0]] = nums[timeline[index][1]];
                nums[timeline[index][1]] = temp
                this.setState({ nums: [...nums] });
                await new Promise(resolve => setTimeout(resolve, 500));
            }

            index++;
            if (index > timeline.length - 1) {
                break;
            }
        }
        this.zeroHighlight(nums);
    }

    render () {
        const { 
            handleRandomClick, 
            handleMaxSampleSizeInput, 
            handleSelectSort, 
            handleTestSort,
            handleInsertionSort 
        } = this;

        const {
            nums,
            maxSampleSize,
            highlighted,
        } = this.state;

        return(
            <div class="container body-container">
                <div class="row home-flex">
                    <div class="col-6 col-flex">
                        <span>Array Size: </span>
                        <input 
                            type="number" 
                            value={maxSampleSize} 
                            onChange={handleMaxSampleSizeInput} 
                        />
                        <button 
                            class="visualizer-button-format" 
                            onClick={handleRandomClick}
                        >
                            Randomize
                        </button>
                    </div>
                    <div class="col-6 col-flex">
                        <button class="visualizer-button-format" onClick={handleTestSort}>Bubble</button>
                        <button class="visualizer-button-format" onClick={handleSelectSort}>Select</button>
                        <button class="visualizer-button-format" onClick={handleInsertionSort}>Insertion</button>
                    </div>
                </div>
                <Visualizer 
                    array={nums} 
                    highlighted={highlighted}
                />
            </div>
        )
    }

}

export default Home;
/*
*/