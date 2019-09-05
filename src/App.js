import React from "react";
import Index from "./page/index/index";
import Time from "./page/time/time";
import Category from "./page/category/category";
import Info from "./page/introduce/info";
import Admin from "./page/admin/index/index";
import Menu from "./component/menu/menu";
import { BackTop } from "antd";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";

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
          <Route exact path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
