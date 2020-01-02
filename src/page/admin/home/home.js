import React from "react";
import Right from "../../../component/adminRight/right";
import Echart from "../../../component/echart/echart";
import Pie from "../../../component/pie/pie";
import { Breadcrumb, Card, Col, Row, Table, Divider, Tag, Icon, message } from 'antd';
import api from "../../../config/http";
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



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            userData: [],
            allCount: 0
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.getUserArticles()
        // axios 请求 数据
       
    }

    getUserArticles = () => {
        const _this = this
        const params = {
            page: _this.state.page,
        }
        api.allUserArticals(params, (r) => {
            const { data } = r
            const res = data.data
            if (res.status === 1) {
                window.scrollTo(0, 0)
                this.setState({
                    userData: res.list.rows,
                    allCount: res.list.count
                });
            }
        })
    }

    modifyArticle = (record) => {
        console.log(record)
        const params = {

        }

        // api.allArticals(params, (r) => {
        //     console.log(r)
        //     const { data } = r
        //     const res = data.data
        //     if (res.status === 1) {
        //         window.scrollTo(0, 0)
        //         console.log(res.list.count)
        //         this.setState({
        //             userData: res.list.rows,
        //             allCount: res.list.count
        //         });
        //     }
        // })
    }

    deleteArticle = (record) => {
        const _this = this
        const params = {
            aid: record.aid
        }

        api.deleteArticle(params, (r) => {
            const { data } = r
            const res = data.data
            if (res.status === 1) {
                window.scrollTo(0, 0)
                message.success('删除成功！！！');
                _this.getUserArticles()
            }
        })
    }

    render() {
        const columnsData = [
            {
                title: 'Title',
                dataIndex: 'artical_name',
                key: 'artical_name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Action',
                dataIndex: 'artical_status',
                key: 'artical_status',
                render: (text, record) => (
                    <span>
                        <a onClick={this.modifyArticle.bind(this, record)}>Modify</a>
                        <Divider type="vertical" />
                        <a onClick={this.deleteArticle.bind(this, record)}>Delete</a>
                    </span>
                ),
            },
        ];
        return (
            <Row gutter={16}>
                <Col className="gutter-row" xl={24} xxl={20}>
                    <div className="mainStyle" style={{ paddingRight: 10, background: '#fff' }}>
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
                            <Table columns={columnsData} dataSource={this.state.userData} style={{ marginTop: "20px" }} rowKey={row => row.aid} pagination={{
                                total: this.state.allCount,

                            }} />
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
