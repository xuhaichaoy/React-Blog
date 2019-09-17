import React from "react";
import Index from "../page/index/index";
import Time from "../page/time/time";
import Category from "../page/category/category";
import Info from "../page/introduce/info";
import AdminHome from "../page/admin/index/index";
import AdminPublish from "../page/admin/push/push";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Menu from "../component/menu/menu";
import { BackTop } from "antd";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Menu />
                    <BackTop />
                    <Route exact path="/index" component={Index} />
                    <Route exact path="/time" component={Time} />
                    <Route exact path="/category" component={Category} />
                    <Route exact path="/intro" component={Info} />
                    <Route exact path="/admin/home" component={AdminHome} />
                    <Route exact path="/admin/publish" component={AdminPublish} />
                    <Redirect from="(/:name)" to="/index" />
                </div>
            </Router>
        )
    }
}

export default App