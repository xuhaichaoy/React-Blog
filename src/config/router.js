import React from "react";
import Index from "../page/index/index";
import Time from "../page/time/time";
import Category from "../page/category/category";
import Info from "../page/introduce/info";
import AdminHome from "../page/admin/index/index";
import AdminPublish from "../page/admin/push/push";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import Menu from "../component/menu/menu";
import { BackTop, Layout } from "antd";

const { Content, Sider } = Layout;

const Topics = ({ match }) => {
    console.log(match)
    return <div>
        <ul>
            <li><Link to={`${match.url}/home`}>a</Link></li>
            <li><Link to={`${match.url}/publish`}>b</Link></li>
            <li><Link to={`${match.url}/redux`}>c</Link></li>
        </ul>
    </div>
    
};

const MainIndex = ({ match }) => {
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
                <Topics match={match} />
            </Sider>
            <Layout style={{ marginLeft: "200px" }}>
                <Content style={{ margin: '24px 16px' }}>

                </Content>
            </Layout>
        </Layout>
    )
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    componentDidMount() {
        console.log(this.props.history)
    }

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
                    <Topics />
                </Sider>
                <Layout style={{ marginLeft: "200px" }}>
                    <Content style={{ margin: '24px 16px' }}>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(this.props.history)
        console.log(this.props)
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Menu />
                    <BackTop />
                    <Route exact path="/index" component={Index} />
                    <Route exact path="/time" component={Time} />
                    <Route exact path="/category" component={Category} />
                    <Route exact path="/intro" component={Info} />
                    <Route exact path="/admin" component={AdminHome} />
                    <Route exact path="/admin/home" component={AdminHome} />
                    <Route exact path="/admin/publish" component={AdminPublish} />
                    <Redirect from="(/:name)" to="/index" />
                </div>
            </Router>
        )
    }
}

export default App