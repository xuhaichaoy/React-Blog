import React from "react";
import { Menu, Icon } from 'antd';
import "./left.css";

const { SubMenu } = Menu;
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: "home"
        };
    };

    handleClick = e => {
        this.setState({
            current: e.key 
        });
        // this.props.history.push("/admin/" + e.key);
    };

    render() {
        return (
            <Menu onClick={this.handleClick} theme="light" selectedKeys={[this.state.current]} mode="inline" className="menuStyle">
                <Menu.Item key="home">
                    <Icon type="pie-chart" />
                    <span>Home</span>
                </Menu.Item>
                <Menu.Item key="publish">
                    <Icon type="desktop" />
                    <span>Publish</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            <span>User</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="team" />
                            <span>Team</span>
                        </span>
                    }
                >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                    <Icon type="file" />
                    <span>File</span>
                </Menu.Item>
            </Menu>
        );
    }
}

export default App;
