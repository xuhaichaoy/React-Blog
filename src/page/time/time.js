import React from "react";
import SideBar from "../../component/sidebar/sidebar";
import Shaft from "../../component/shaft/shaft";
import { Row, Col } from "antd";

import "./time.css";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="gutter-example">
          <Row>
            <Col className="gutter-row" className="barFixed" xs={6} sm={6} md={8} lg={5} xl={5}>
              <div className="gutter-box">
                <SideBar></SideBar>
              </div>
            </Col>
            <Col className="gutter-row" xs={6} sm={6} md={8} lg={5} xl={5}></Col>
            <Col className="gutter-row" xs={18} sm={18} md={16} lg={19} xl={19}>
              <div className="gutter-box" className="pageContent">
                <Shaft></Shaft>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
