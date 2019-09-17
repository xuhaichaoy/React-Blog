import React from "react";
import LeftMenu from "../../../component/adminLeft/left";
import Home from "../home/home";
import Publish from "../push/push";
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

const { Content, Sider } = Layout;

class App extends React.Component {

    render() {
        return (
            <Layout>
                <Sider className="siderStyle"
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <LeftMenu />
                </Sider>
                <Layout style={{ marginLeft: "200px" }}>
                    <Content style={{ margin: '24px 16px' }}>
                        <Router>
                            <Route exact path="/admin/home" component={Home} />
                            <Route exact path="/admin/publish" component={Publish} />
                        </Router>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
