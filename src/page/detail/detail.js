import React from "react";
import SideBar from "../../component/sidebar/sidebar";
import Home from "../../component/home/home";
import Anchor from "../../component/anchor/anchor";
import { Row, Col } from "antd";

import "./detail.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articalId: 0
        }
    }

    componentDidMount() {
        const url = window.location.href
        const params = url.slice(url.lastIndexOf('/') + 1)
        if(!params) {
            return
        }
        this.setState({
            articalId: parseInt(params)
        })
        // axios 请求 数据
    }

    render() {
        return (
            <div className="page">
                <div className="gutter-example">
                    <Row>
                        <Col className="gutter-row" className="barFixed" xs={6} sm={6} md={8} lg={5} xl={5}>
                            <div className="gutter-box">
                                <SideBar></SideBar>
                            </div>
                        </Col>
                        <Col className="gutter-row" xs={6} sm={6} md={8} lg={5} xl={5}></Col>
                        <Col className="gutter-row" xs={18} sm={18} md={18} lg={19} xl={19}>
                            <div className="gutter-box" className="pageContent">

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default App;
