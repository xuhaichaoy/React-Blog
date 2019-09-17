import React from "react";
import Right from "../../../component/adminRight/right";
import Echart from "../../../component/echart/echart";
import Pie from "../../../component/pie/pie";
import { Breadcrumb, Card, Col, Row, Table, Divider, Tag, Icon } from 'antd';
import "./home.css";

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

const columnsData = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>Invite {record.name}</a>
                <Divider type="vertical" />
                <a>Delete</a>
            </span>
        ),
    },
];

const tableData = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


class App extends React.Component {

    render() {
        return (
            <Row gutter={16}>
                <Col className="gutter-row" xl={24} xxl={20}>
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
                                <Col span={4}>
                                    <Card hoverable className="cards">
                                        <Icon type="dashboard" className="adminIcons" />
                                        <h4>Dashboard</h4>
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card hoverable className="cards">
                                        <Icon type="dashboard" className="adminIcons" />
                                        <h4>Dashboard</h4>
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card hoverable className="cards">
                                        <Icon type="dashboard" className="adminIcons" />
                                        <h4>Dashboard</h4>
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card hoverable className="cards">
                                        <Icon type="dashboard" className="adminIcons" />
                                        <h4>Dashboard</h4>
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card hoverable className="cards">
                                        <Icon type="dashboard" className="adminIcons" />
                                        <h4>Dashboard</h4>
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
                        <div className="tableData">
                            <h3>Statistics Report</h3>
                            <p>
                                Measure How Fast You’re Growing Monthly Recurring Revenue. &nbsp;
                                            <a href="javascript:;">Learn More</a>
                            </p>
                            <Table columns={columnsData} dataSource={tableData} style={{ marginTop: "20px" }} />
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" xl={0} xxl={4}>
                    <div className="rightBar">
                        <Right />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default App;
