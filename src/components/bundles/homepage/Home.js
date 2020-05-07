import React, {Component} from 'react';
import "./Home.css";
import Visualizer from "../visualizer";
import { bubblesort } from "../sorts/Bubblesort";
import { insertionsort } from "../sorts/Insertionsort";

class Home extends Component {

    state = {
        nums: [],
        highlighted: [],
        speed: 10,
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

    handleBubbleSort = async () => {
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

    handleSelectSort = async () => {
        let timeline;
        let index = 0;
        let iHolder = -1;
        let temp;
        const { nums } = this.state;
        this.zeroHighlight(nums);
        let highlighted = [...this.state.highlighted];
        timeline = insertionsort(nums);

        while (true) {
            this.zeroHighlight(nums);
            highlighted = [...this.state.highlighted];
            if (iHolder !== -1) {
                highlighted[iHolder] = 2;
            }
            if (timeline[index][1] === -1) {
                if (timeline[index][0] === timeline[index][3]) {
                    highlighted[timeline[index][0]] = 1;
                    this.setState({ highlighted: [...highlighted] });

                    await new Promise(resolve => setTimeout(resolve, this.state.speed));

                    highlighted[timeline[index][3]] = 2;
                    iHolder = timeline[index][3];
                    this.setState({ highlighted: [...highlighted] });
                    
                    await new Promise(resolve => setTimeout(resolve, this.state.speed));
                } else {
                    highlighted[timeline[index][0]] = 1;
                    highlighted[timeline[index][3]] = 2;
                    iHolder = timeline[index][3];
                    this.setState({ highlighted: [...highlighted] });
                    
                    await new Promise(resolve => setTimeout(resolve, this.state.speed));
                }
            } else if (timeline[index][1] === -2) {
                highlighted[timeline[index][0]] = 2;
                this.setState({ highlighted: [...highlighted] });

                highlighted[timeline[index][0]] = 1;
                nums[timeline[index][0]] = timeline[index][3];
                this.setState({
                    highlighted: [...highlighted],
                    nums: [...nums]
                });

                await new Promise(resolve => setTimeout(resolve, this.state.speed));
            } else {
                highlighted[timeline[index][0]] = 1;
                highlighted[timeline[index][1]] = 1;
                highlighted[timeline[index][3]] = 2;
                this.setState({ highlighted: [...highlighted] });
                
                await new Promise(resolve => setTimeout(resolve, this.state.speed));

                if (timeline[index][2] === 1) {
                    temp = nums[timeline[index][0]];
                    nums[timeline[index][0]] = nums[timeline[index][1]];
                    nums[timeline[index][1]] = temp
                    this.setState({ nums: [...nums] });

                    await new Promise(resolve => setTimeout(resolve, this.state.speed));
                }
            }

            index++;
            if (index > timeline.length - 1) {
                break;
            }
        }
        this.zeroHighlight(nums);
    }

    handleInsertionSort = async () => {

        // while (true) {

        // }
    }

    render () {
        const { 
            handleRandomClick, 
            handleMaxSampleSizeInput, 
            handleSelectSort, 
            handleBubbleSort,
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
                        <button class="visualizer-button-format" onClick={handleBubbleSort}>Bubble</button>
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