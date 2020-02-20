import React from "react";
import Right from "../../../component/adminRight/right";
import Echart from "../../../component/echart/echart";
import Pie from "../../../component/pie/pie";
import { Breadcrumb, Card, Col, Row, Table, Divider, Tag, Icon, message, Modal, Button, Form, Input, Select } from 'antd';
import api from "../../../config/http";
import "./home.css";

const { Option } = Select;

const columns = [
    {
        title: 'TimeID',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        render: text => <a>{text}</a>,
    },
    {
        title: 'Content',
        dataIndex: 'age',
        key: 'age',
        width: 150,
        render: text => <div style={{ textAlign: 'left' }}>{text}</div>,
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

let id = 0;

class DynamicFieldSet extends React.Component {
    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one content
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { keys, names } = values;
                console.log('Received values of form: ', values);
                console.log('Merged values:', keys.map(key => names[key]));
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Content' : ''}
                required={true}
                key={k}
            >
                {getFieldDecorator(`names[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [
                        {
                            required: true,
                            whitespace: true,
                            message: "Please input content or delete this field.",
                        },
                    ],
                })(<Input placeholder="contents" style={{ width: '60%', marginRight: 8 }} />)}
                {keys.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                ) : null}
            </Form.Item>
        ));
        return (
            <Form>
                <Form.Item
                    {...formItemLayout}
                    label={'Color'}
                >
                    {getFieldDecorator('Color', {
                        rules: [{ required: true, message: 'Please select your Color!', whitespace: true }],
                        initialValue: "grey",
                    })(<Select style={{ width: '60%' }}>
                            <Option value="grey">Normal</Option>
                            <Option value="green">Success</Option>
                            <Option value="red">Red</Option>
                        </Select>)}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label={'Special'}
                >
                    {getFieldDecorator('Special', {
                        rules: [{ required: true, message: 'Please select your Special!', whitespace: true }],
                        initialValue: "0",
                    })(<Select style={{ width: '60%' }}>
                        <Option value="0">False</Option>
                        <Option value="1">True</Option>
                    </Select>)}
                </Form.Item>
                {formItems}
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> Add field
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedDynamicFieldSet = Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            userData: [],
            allCount: 0,
            visible: false
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
        const _this = this
        const params = {
            aid: record.aid
        }

        // api.deleteArticle(params, (r) => {
        //     const { data } = r
        //     const res = data.data
        //     if (res.status === 1) {
        //         window.scrollTo(0, 0)
        //         message.success('删除成功！！！');
        //         _this.getUserArticles()
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

    addTime = () => {
        console.log(1111)
        this.setState({
            visible: true,
        });
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

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
                <Col className="gutter-row" xl={24} xxl={19}>
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
                                                <a href="javascript:;" onClick={this.addTime.bind(this)}>AddTimeline</a>
                                </p>
                                <Modal
                                    title="AddTimeline Modal"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >
                                    <WrappedDynamicFieldSet />
                                </Modal>
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
                <Col className="gutter-row" xl={0} xxl={5}>
                    <div className="rightBar">
                        <Right />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default App;
