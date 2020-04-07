import React, {Component} from 'react';
import Visualizer from "../visualizer";

class Home extends Component {

    render () {

        let nums = [];
        let rand;

        for (let i = 0; i < 200; i++) {
            rand = Math.round(1 + Math.random() * 100);
            nums = [...nums, rand]
        }

        return(
            <div>
                <h1>This is the home page</h1>
                <Visualizer array={nums} />
            </div>
        )
    }

}

export default Home;