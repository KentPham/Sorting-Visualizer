import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../bundles/homepage";

class Routes extends Component {

    render() {
        return (

            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Router>

        )
    }

}

export default Routes;