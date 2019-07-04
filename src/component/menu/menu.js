import React from "react";
import { Menu, Icon, Input, Row, Col, Divider, Avatar, Dropdown } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./menu.css";
// const { Search } = Input;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: "index"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
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
    return (
      <div className="top">
        <div className="fixed">
          <Row className="header">
            <Col xs={2} sm={4} md={6} lg={5} xl={5}>
              <h1 className="haichao">asdasd</h1>
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
                </Menu>
              </div>
            </Col>
            <Col xs={2} sm={4} md={4} lg={4} xl={4}>
              <div className="user">
                <Icon type="bell" className="bell" />
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Avatar
                    className="avatar ant-dropdown-link"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
        <div className="fixedBac" />

        <div className="topHeader" />
      </div>
    );
  }
}

export default App;
