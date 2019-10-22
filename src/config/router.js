import React from "react";
import Index from "../page/index/index";
import Time from "../page/time/time";
import Detail from "../page/detail/detail";
import Category from "../page/category/category";
import Info from "../page/introduce/info";
import AdminHome from "../page/admin/index/index";
import Enter from "../page/admin/push/push";
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
                    <Route path="/time" component={Time} />
                    <Route path="/category" component={Category} />
                    <Route path="/intro" component={Info} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/admin" component={AdminHome} />
                    <Route path="/enter" component={Enter} />
                    <Redirect from="(/:name)" to="/index" />
                </div>
            </Router>
        )
    }
}

export default App