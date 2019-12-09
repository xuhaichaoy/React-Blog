import React from "react";
import { Menu, Icon, Input, Row, Col, Divider, Avatar, Dropdown } from "antd";
import Login from "../login/login";
import Drawer from "../drawer/drawer";
import api from "../../config/http";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import "./menu.css";
import Img from "../../static/1.jpeg";

const { SubMenu } = Menu;
const { Search } = Input;

class App extends React.Component {
  state = {
    current: "index",
    logined: false,
    inputValue: "",
    search: "",
    point: "",
    user: {}
  };

  componentWillMount() {
    const obj = this.solveUrl();
    this.setState({
      inputValue: obj.search
    });
  }

  componentDidMount() {
    const url = window.location.href;
    const num = url.lastIndexOf("/");
    this.setState({
      current: url.slice(num + 1)
    });
    this.getLogined();
  }

  componentWillUpdate(prevProps, prevState) {
    const historyUrl = prevProps.history.location.pathname.slice(1);
    const currentUrl = prevState.current;
    if (historyUrl === "index" && historyUrl !== currentUrl) {
      this.setState({
        current: historyUrl
      });
    }
  }

  userClick = e => {
    if (e.key === "setting") {
      this.drawerChild.showDrawer();
    } else if (e.key === "logout") {
      this.getLogout();
    } else if (e.key === "adminHome") {
      this.props.history.push("/adminHome");
    } else if (e.key === "publish") {
      this.props.history.push("/publish");
    } else if (e.key === "article") {
      this.props.history.push("/article");
    }
  };

  solveUrl = () => {
    // 有没有锚点 有没有search 都有 ？
    // 锚点    #aid
    // 搜索    ?search
    const url = window.location.href;
    let point = "";
    let search = "";

    if (url.includes("#aid")) {
      const num = url.indexOf("#aid");
      point = url.slice(num, url.length);
    }
    if (url.includes("?search=")) {
      const num = url.indexOf("?search=");
      search = url.slice(num + 8, url.length);
      if (point) {
        const n = search.indexOf("#aid");
        search = search.slice(0, n);
      }
    }
    this.setState({
      search: search,
      point: point
    });
    const obj = {
      point: point,
      search: search
    };
    return obj;
  };

  getLogined = () => {
    // 判断当前登录状态
    api.getCurrentUser({}, r => {
      const { data } = r;
      const res = data.data;
      if (res.status === -1) {
        localStorage.removeItem("hc_login")
        return;
      } else {
        this.setState({
          user: res.data,
          logined: true
        });
        localStorage.setItem("hc_login", JSON.stringify(res.data))
      }
    });
  };

  getLogout = () => {
    // 判断当前登录状态
    api.logout({}, r => {
      const { data } = r;
      const res = data.data;
      if (res.status === 1) {
        this.setState({
          user: {},
          logined: false
        });
      }
    });
  };

  callback = flag => {
    if (flag) {
      this.getLogined();
    }
    this.setState({
      logined: flag
    });
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  userInfo() {
    if (this.state.logined) {
      const menu = () => (
        <Menu className="userMenuStyle" onClick={this.userClick}>
          <Menu.Item key="publish">写文章</Menu.Item>
          <Menu.Item key="adminHome">管理</Menu.Item>
          <Menu.Item key="setting">设置</Menu.Item>
          <Menu.Item key="article">小说</Menu.Item>
          <Menu.Divider />
          <SubMenu title="关于">
            <Menu.Item key="5">3rd menu item</Menu.Item>
            <Menu.Item key="6">4th menu item</Menu.Item>
          </SubMenu>
          <Menu.Item key="logout">退出</Menu.Item>
        </Menu>
      );

      return (
        <div className="user">
          <Icon type="bell" className="bell" />
          <Dropdown overlay={menu} trigger={["click"]} className="userImg">
            <Avatar className="avatar ant-dropdown-link" src={Img} />
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

  onRef = ref => {
    this.drawerChild = ref;
  };

  keyDown = value => {
    if (value) {
      value = value.trim();
      this.props.history.push("/index?search=" + value);
    } else {
      this.props.history.push("/index");
    }
  };

  render() {
    return (
      <div className="top">
        <div className="fixed">
          <Row className="header">
            <Col xs={2} sm={4} md={6} lg={5} xl={5}>
              <h1 className="haichao">
                <Link to="/index">HaiChao</Link>
              </h1>
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
          <Drawer onRef={this.onRef} user={this.state.user} />
        </div>
        <div className="fixedBac" />

        <div className="topHeader" />
      </div>
    );
  }
}

export default withRouter(App);
