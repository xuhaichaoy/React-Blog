import React from "react"
import { Menu, Icon, Input, Row, Col, Divider, Avatar, Dropdown } from "antd"
import Login from "../login/login"
import api from '../../config/http'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"
import "./menu.css"
// const { Search } = Input
const { SubMenu } = Menu

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);
class App extends React.Component {
  state = {
    current: "index",
    logined: false
  };

  componentWillUpdate(prevProps, prevState) {
    // 监听路由变化。。。。。。。
    // todo
    const historyUrl = prevProps.history.location.pathname.slice(1)
    const currentUrl = prevState.current
    if (historyUrl === "index" && historyUrl !== currentUrl) {
      this.setState({
        current: historyUrl
      })
    }
  }

  componentDidMount() {
    this.getLogined()
  }

  getLogined = () => {
    // 判断当前登录状态
    api.getCurrentUser({}, (r) => {
      const { data } = r
      const res = data.data
      if(res.status === -1 ) {
        return
      }else {
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
  };

  userInfo() {
    if (this.state.logined) {
      return (
        <div className="user">
          <Icon type="bell" className="bell" />
          <Dropdown overlay={menu} trigger={["click"]}>
            <Avatar
              className="avatar ant-dropdown-link"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
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

  render() {
    return (
      <div className="top">
        <div className="fixed">
          <Row className="header">
            <Col xs={2} sm={4} md={6} lg={5} xl={5}>
              <h1 className="haichao">HaiChao</h1>
            </Col>
            <Col xs={2} sm={4} md={6} lg={6} xl={6}>
              <div className="input">
                <Divider type="vertical" className="verLine" />
                <Input
                  className="inputValue"
                  style={{ width: 280 }}
                  placeholder="Enter your username"
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
                  <Menu.Item key="enter">
                    <Link to="/enter">娱乐</Link>
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
