import React from "react";
import Menu from "../../component/menu/menu";
import SideBar from "../../component/sidebar/sidebar";
import Home from "../../component/home/home";
import Anchor from "../../component/anchor/anchor";
import { Row, Col } from "antd";

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Menu />
        <div className="gutter-example">
          <Row>
            <Col className="gutter-row" className="barFixed" xs={6} sm={6} md={8} lg={5} xl={5}>
              <div className="gutter-box">
                <SideBar></SideBar>
              </div>
            </Col>
            <Col className="gutter-row" xs={6} sm={6} md={8} lg={5} xl={5}></Col>
            <Col className="gutter-row" xs={14} sm={14} md={14} lg={15} xl={15}>
              <div className="gutter-box" className="pageContent">
                <Home></Home>
              </div>
            </Col>
            <Col className="gutter-row" xs={4} sm={4} md={4} lg={4} xl={4}>
              <div className="gutter-box" style={{paddingLeft: "40px"}}>
                <Anchor></Anchor>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
