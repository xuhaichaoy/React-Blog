import React from "react";
import LeftMenu from "../../../component/adminLeft/left";
import Home from "../home/home";
import { Layout } from 'antd';
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
                        <Home />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
