import React from "react";
import Index from "../page/index/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={Index} />
                </div>
            </Router>
        )
    }
}

export default App