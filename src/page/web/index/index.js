import React from "react";
import SideBar from "../../../component/sidebar/sidebar";
import Home from "../../../component/home/home";
import Anchor from "../../../component/anchor/anchor";
import Menu from "../../../component/menu/menu";
import Time from "../time/time";
import Category from "../category/category";
import Info from "../introduce/info";
import Detail from "../detail/detail";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, BackTop } from "antd";

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Router>
          <Menu />
          <div className="gutter-example">
            <Row>
              <Col className="gutter-row barFixed" xs={6} sm={6} md={8} lg={5} xl={5}>
                <div className="gutter-box">
                  <SideBar></SideBar>
                </div>
              </Col>
              <Col className="gutter-row" xs={6} sm={6} md={8} lg={5} xl={5}></Col>
              <Col className="gutter-row" xs={14} sm={14} md={14} lg={15} xl={15}>
                <div className="gutter-box pageContent">
                  <div className="App">
                    <BackTop />
                    <Switch>
                      <Route path="/index" component={Home} />
                      <Route path="/time" component={Time} />
                      <Route path="/category" component={Category} />
                      <Route path="/intro" component={Info} />
                      <Route path="/detail/:id" component={Detail} />
                      <Redirect to="/index" />
                    </Switch>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" xs={4} sm={4} md={4} lg={4} xl={4}>
                <div className="gutter-box" style={{ paddingLeft: "40px" }}>
                  <Anchor></Anchor>
                </div>
              </Col>
            </Row>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
