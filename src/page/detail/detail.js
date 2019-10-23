import React from "react";
import SideBar from "../../component/sidebar/sidebar";
import { Row, Col, Divider } from "antd";
import api from '../../config/http'
import "./detail.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articalId: 0,
            value: '',
            detailData: {}
        }
    }

    componentDidMount() {
        window.scrollTo(0,0)
        const _this = this
        const url = window.location.href
        const params = url.slice(url.lastIndexOf('/') + 1)
        if (!params) {
            return
        }
        this.setState({
            articalId: parseInt(params)
        })
        // axios 请求 数据
        api.detailArtical(parseInt(params), (r) => {
            const { data } = r
            const res = data.data
            console.log(res)
            if(res.status === 1) {
                _this.setState({
                    detailData: res.list[0]
                })
            }
        })
    }

    render() {
        const detail = this.state.detailData
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
                            <div className="gutter-box" className="pageContent detailPage">
                                <div className="title">
                                    <h2>{detail.artical_name}</h2>
                                    <span>{detail.Date}</span>
                                </div>
                                <Divider />
                                <div className="detailContent">
                                    <p dangerouslySetInnerHTML={{ __html: detail.content }}></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default App;
