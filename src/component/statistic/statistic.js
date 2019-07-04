import React from "react";
import { Statistic, Row, Col, Button } from "antd";

import "./statistic.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };
  }

  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
          />
        </Col>
      </Row>
    );
  }
}

export default App;
