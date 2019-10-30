import React from "react"
import { Icon, Avatar, Divider, List, Tag } from "antd"
import { withRouter } from "react-router-dom";
import api from '../../config/http'
import "./sidebar.css"
import Img from '../../static/1.jpeg'

class App extends React.Component {
  state = {
    current: "home",
    nickName: "海超",
    Github: "https://github.com/xuhaichaoy",
    Chrome: "http://haichao.mobi/index",
    Info: "未来的事情无人知晓, 所以才有无限可能.",
    image: "https://c-ssl.duitang.com/uploads/item/201707/19/20170719211350_4PnBt.thumb.700_0.jpeg",
    allData: []
  };


  componentDidMount() {
    // 获取mine 的信息
    api.getmine({}, (r) => {
      const { data } = r
      const res = data.data
      console.log(res)
    })


    // TODO 待优化  出现明显卡顿 内存泄漏

    api.getList({}, (r) => {
      const { data } = r
      const res = data.data
      if (res.status === 1) {
        const list = res.list
        this.setState({
          allData: list
        })

      }
    })
  }

  handleClick = (e) => {
    this.props.history.push('/detail/' + e)
  }

  render() {
    const data = this.state.allData
    return (
      <div className="sidebar">
        <div className="header">
          <Avatar size={110} src={Img} />
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
                <span><a href={this.state.Github} target="view_window" className="aHref">Github</a></span>
              </li>
              <li className="marginRight">
                <Icon
                  style={{ fontSize: "14px" }}
                  type="chrome"
                  className="icons"
                />
                <span><a href={this.state.Chrome} target="view_window" className="aHref">Chrome</a></span>
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
          <div className="listBox">
            <List
              className="lists"
              size="small"
              dataSource={data}
              split={false}
              renderItem={(item, index) => (
                <List.Item className="lis" onClick={this.handleClick.bind(this, item.aid)}>{" " + item.artical_name}</List.Item>
              )}
            />
          </div>
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

export default withRouter(App);
