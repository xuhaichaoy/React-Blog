import React from "react";
import { Icon, Avatar, Divider, List, Tag } from "antd";
import api from '../../config/http'
import "./sidebar.css";

class App extends React.Component {
  state = {
    current: "home",
    nickName: "海超",
    Github: "https://github.com/xuhaichaoy",
    Chrome: "http://haichao.mobi/index",
    Info: "未来的事情无人知晓, 所以才有无限可能.",
    image: ""
  };

  // 获取mine 的信息
  componentDidMount () {
    const _this = this
    api.getmine({}, (r) => {
      const {data} = r
      const res = data.data
      // console.log(res)
    })
  }

  render() {
    const data = [
      "Racing car sprays burning fuel  into crowdinto crowdinto crowdinto crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires.",
      "Los Angeles battles huge wildfires.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires.",
      "Man charged over missing wedding girl."
    ];

    return (
      <div className="sidebar">
        <div className="header">
          <Avatar size={110} icon="user" />
          <h2 className="name">{this.state.nickName}</h2>
          <p className="tips">{this.state.Info}</p>
          <div className="brand">
            <ul>
              <li className="marginRight">
                <Icon
                  style={{ fontSize: "14px" }}
                  type="github"
                  className="icons"
                />
                <span><a href={this.state.Github} target="view_window" className = "aHref">Github</a></span>
              </li>
              <li className="marginRight">
                <Icon
                  style={{ fontSize: "14px" }}
                  type="chrome"
                  className="icons"
                />
                <span><a href={this.state.Chrome} target="view_window" className = "aHref">Chrome</a></span>
              </li>
              <li>
                <Icon
                  style={{ fontSize: "14px" }}
                  type="wechat"
                  className="icons"
                />
                <span>WeChat</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="currentArtical">
          <Divider orientation="left">最热文章</Divider>
          <List
            className="lists"
            size="small"
            dataSource={data}
            split={false}
            renderItem={(item, index) => (
              <List.Item className="lis">{" " + item}</List.Item>
            )}
          />
        </div>
        <div className="tips">
          <Divider orientation="left">标签墙</Divider>
          <div>
            <Tag className="tipsBlock" color="magenta">magenta</Tag>
            <Tag className="tipsBlock" color="red">red</Tag>
            <Tag className="tipsBlock" color="volcano">volcano</Tag>
            <Tag className="tipsBlock" color="orange">orange</Tag>
            <Tag className="tipsBlock" color="gold">gold</Tag>
            <Tag className="tipsBlock" color="lime">lime</Tag>
            <Tag className="tipsBlock" color="green">green</Tag>
            <Tag className="tipsBlock" color="cyan">cyan</Tag>
            <Tag className="tipsBlock" color="blue">blue</Tag>
            <Tag className="tipsBlock" color="geekblue">geekblue</Tag>
            <Tag className="tipsBlock" color="purple">purple</Tag>
            <Tag className="tipsBlock" color="volcano">volcano</Tag>
            <Tag className="tipsBlock" color="orange">orange</Tag>
            <Tag className="tipsBlock" color="gold">gold</Tag>
            <Tag className="tipsBlock" color="lime">lime</Tag>
            <Tag className="tipsBlock" color="green">green</Tag>
            <Tag className="tipsBlock" color="cyan">cyan</Tag>
            <Tag className="tipsBlock" color="blue">blue</Tag>
            <Tag className="tipsBlock" color="red">red</Tag>
            <Tag className="tipsBlock" color="volcano">volcano</Tag>
            <Tag className="tipsBlock" color="orange">orange</Tag>
            <Tag className="tipsBlock" color="gold">gold</Tag>
            <Tag className="tipsBlock" color="lime">lime</Tag>
            <Tag className="tipsBlock" color="green">green</Tag>
            <Tag className="tipsBlock" color="cyan">cyan</Tag>
            <Tag className="tipsBlock" color="blue">blue</Tag>
            <Tag className="tipsBlock" color="geekblue">geekblue</Tag>
            <Tag className="tipsBlock" color="purple">purple</Tag>
            <Tag className="tipsBlock" color="volcano">volcano</Tag>
            <Tag className="tipsBlock" color="orange">orange</Tag>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
