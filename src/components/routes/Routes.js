import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../bundles/homepage";

class Routes extends Component {

    render() {
        return (

            <Router>
                <h1>This is a switch header</h1>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Router>

        )
    }

}

export default Routes;