import React from "react";
import { Descriptions } from "antd";
import Comments from '../comment/comment';
import Statistic from "../statistic/statistic"
import "./info.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };
  }

  render() {
    return (
      <div className="info">
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
        <Statistic></Statistic>
        <Comments></Comments>
      </div>
    );
  }
}

export default App;
