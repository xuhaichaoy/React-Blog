import React from "react"
import { Descriptions } from "antd"
import Comments from '../../../component/comment/comment'
import Statistic from "../../../component/statistic/statistic"
import "./info.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };
  }

  render() {
    return (
      <div className="gutter-box pageContent">
        <div className="info">
          <Descriptions title="User Info">
            <Descriptions.Item label="Name" span={3}>HaiChao</Descriptions.Item>
            <Descriptions.Item label="QQ" span={3}>392282002 / 958128352</Descriptions.Item>
            <Descriptions.Item label="Origin" span={3}>山东省 威海市</Descriptions.Item>
            <Descriptions.Item label="University" span={3}>烟台大学</Descriptions.Item>
            <Descriptions.Item label="Specialty" span={3}>软件工程</Descriptions.Item>
            <Descriptions.Item label="Address" span={3}>北京市 海定区 西二旗</Descriptions.Item>
            <Descriptions.Item label="Company" span={3}>北京六趣网络科技有限公司</Descriptions.Item>
            <Descriptions.Item label="Occupation" span={3}>前端 | 全栈 开发</Descriptions.Item>
            <Descriptions.Item label="采用的技术" span={3}>React + Antd + Redux + Nodejs + MySQL + TypeScript + Routing-Controllers + Sequelize</Descriptions.Item>
          </Descriptions>
          <Comments></Comments>
        </div>
      </div>
    );
  }
}

export default App;
