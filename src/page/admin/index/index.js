import React from "react";
import LeftMenu from "../../../component/adminLeft/left";
// import BreadCrumb from "../../../component/breadcrumb/breadcrumb";
import Echart from "../../../component/echart/echart";
import Pie from "../../../component/pie/pie";
import { Layout, Breadcrumb, Card, Col, Row, Table, Divider, Tag } from 'antd';

import "./index.css";

const { Content, Sider } = Layout;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
    },
    {
        title: 'Action',
        key: 'action',
        width: 150,
        render: (text, record) => (
            <span>
                <a>Edit</a>
                <Divider type="vertical" />
                <a>Delete</a>
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
    }
];

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
                        <div className="mainStyle" style={{ padding: 24, background: '#fff' }}>
                            <h3>Dashboard</h3>
                            <Breadcrumb>
                                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="/admin">Home</a>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="admincardList">
                                <Row gutter={16}>
                                    <Col span={3}>
                                        <Card hoverable className="cards">
                                            Card content
                                        </Card>
                                    </Col>
                                    <Col span={3}>
                                        <Card hoverable className="cards">
                                            Card content
                                        </Card>
                                    </Col>
                                    <Col span={3}>
                                        <Card hoverable className="cards">
                                            Card content
                                        </Card>
                                    </Col>
                                    <Col span={3}>
                                        <Card hoverable className="cards">
                                            Card content
                                        </Card>
                                    </Col>
                                    <Col span={3}>
                                        <Card hoverable className="cards">
                                            Card content
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <Echart />


                            <div className="userMain">
                                <div className="userTable">
                                    <h3>Statistics Report</h3>
                                    <p>
                                        Measure How Fast You’re Growing Monthly Recurring Revenue. &nbsp;
                                        <a href="javascript:;">Learn More</a>
                                    </p>
                                    <Table columns={columns} scroll={{ y: 318 }} dataSource={data} pagination={false} className="tableStyle" />
                                </div>
                                <div className="userCharts">
                                    <h3>Statistics Report</h3>
                                    <p>
                                        Measure How Fast You’re Growing Monthly Recurring Revenue. &nbsp;
                                        <a href="javascript:;">Learn More</a>
                                    </p>
                                    <Pie />
                                </div>
                            </div>
                        </div>

                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
