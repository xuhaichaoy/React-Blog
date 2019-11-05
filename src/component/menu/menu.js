import React from "react"
import { Menu, Icon, Input, Row, Col, Divider, Avatar, Dropdown } from "antd"
import Login from "../login/login"
import api from '../../config/http'
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom"
import "./menu.css"
import Img from "../../static/1.jpeg"

const { SubMenu } = Menu
const { Search } = Input

const menu = (
  <Menu className="userMenuStyle">
    <Menu.Item>写文章</Menu.Item>
    <Menu.Item>草稿</Menu.Item>
    <Menu.Item>写文章</Menu.Item>
    <Menu.Item>草稿
    <Divider className="menuDividerStyle" />
    </Menu.Item>
    <SubMenu title="关于">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <Menu.Item>退出</Menu.Item>
  </Menu>
);
class App extends React.Component {
  state = {
    current: "index",
    logined: false,
    inputValue: ''
  };


  componentWillMount() {
    const value = window.location.href.split('=')[1]
    this.setState({
      inputValue: value
    })
  }

  componentDidMount() {
    const url = window.location.href
    const num = url.lastIndexOf('/')
    this.setState({
      current: url.slice(num + 1)
    })
    this.getLogined()
  }

  componentWillUpdate(prevProps, prevState) {
    const historyUrl = prevProps.history.location.pathname.slice(1)
    const currentUrl = prevState.current
    if (historyUrl === "index" && historyUrl !== currentUrl) {
      this.setState({
        current: historyUrl
      })
    }
  }

  getLogined = () => {
    // 判断当前登录状态
    api.getCurrentUser({}, (r) => {
      const { data } = r
      const res = data.data
      if (res.status === -1) {
        return
      } else {
        this.setState({
          logined: true
        })
      }
    })
  }

  callback = (flag) => {
    this.setState({
      logined: flag
    })
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
  }

  userInfo() {
    if (this.state.logined) {
      return (
        <div className="user">
          <Icon type="bell" className="bell" />
          <Dropdown overlay={menu} trigger={["click"]} className="userImg">
            <Avatar
              className="avatar ant-dropdown-link"
              src={Img}
            />
          </Dropdown>
        </div>
      );
    } else {
      return (
        <div className="user">
          <Login callback={this.callback} />
        </div>
      );
    }
  }

  keyDown = (value) => {
    if (value) {
      value = value.trim()
      this.props.history.push("/index?search=" + value);
    } else {
      this.props.history.push("/index");
    }
  }

  render() {
    return (
      <div className="top">
        <div className="fixed">
          <Row className="header">
            <Col xs={2} sm={4} md={6} lg={5} xl={5}>
              <h1 className="haichao"><Link to="/index">HaiChao</Link></h1>
            </Col>
            <Col xs={2} sm={4} md={6} lg={6} xl={6}>
              <div className="input">
                <Divider type="vertical" className="verLine" />
                <Search
                  defaultValue={this.state.inputValue}
                  className="inputValue"
                  style={{ width: 280 }}
                  onSearch={this.keyDown}
                  placeholder="Enter your keyword"
                  prefix={
                    <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
              </div>
            </Col>
            <Col xs={20} sm={16} md={8} lg={9} xl={9}>
              <div className="menu">
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  style={{ height: 70, lineHeight: "65px" }}
                >
                  <Menu.Item key="index">
                    <Link to="/index">首页</Link>
                  </Menu.Item>
                  <Menu.Item key="time">
                    <Link to="/time">时间轴</Link>
                  </Menu.Item>
                  <Menu.Item key="category">
                    <Link to="/category">分类</Link>
                  </Menu.Item>
                  <Menu.Item key="intro">
                    <Link to="/intro">介绍</Link>
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col xs={2} sm={4} md={4} lg={4} xl={4}>
              {this.userInfo()}
            </Col>
          </Row>
        </div>
        <div className="fixedBac" />

        <div className="topHeader" />
      </div>
    );
  }
}

export default withRouter(App);
