import React from "react";
import Index from "./page/index/index";
import Time from "./page/time/time";
import Category from "./page/category/category";
import Info from "./page/introduce/info";
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
          <Route path="/index" component={Index} />
          <Route path="/time" component={Time} />
          <Route path="/category" component={Category} />
          <Route path="/intro" component={Info} />
          <Redirect from="(/:name)" to="/index" />
        </div>
      </Router>
    );
  }
}

export default App;
