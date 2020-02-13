import React from "react"
import { Drawer, Form, Button, Input, Icon, Upload, message } from 'antd'
import store from '../../store/index'
import api from '../../config/http'
import "./drawer.css"

function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

class DrawerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            loading: false,
            imageUrl: '',
            store: store.getState()
        }
        store.subscribe(this.storeChange)
    }

    storeChange = () => {
        this.setState({
            store: store.getState()
        })
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    showDrawer = () => {
        this.setState({
            imageUrl: this.state.store.useInfo.image
        })
        this.setState({
            visible: true,
        });
    }

    onClose = () => {
        this.setState({
            visible: false,
        });
    }

    getData = (value) => {
        api.changData(value, (res) => {
            const { data } = res.data
            if (data.status === 1) {
                const action = {
                    type: 'userInfo',
                    useInfo: data.data
                }
                store.dispatch(action)
                this.setState({
                    visible: false,
                });
                message.success('修改成功')
            }
        })
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    }

    handleUp = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values['image'] = this.state.imageUrl
                this.getData(values)

            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 12 },
        };
        let User = this.state.store.useInfo
        return (
            <div>
                <Drawer
                    title="Personal information"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form hideRequiredMark onSubmit={this.handleUp} layout='horizontal' {...formItemLayout} className="drawerFormStyle">
                        <Form.Item
                            label="头像"
                        >
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>

                        <Form.Item label="用户名">
                            {getFieldDecorator('nickName', {
                                rules: [{ required: true, message: 'Please enter user name' }],
                                initialValue: User.nickName,
                            })(<Input placeholder="Please enter user name" />)}
                        </Form.Item>

                        <Form.Item label="个人简介">
                            {getFieldDecorator('Info', {
                                rules: [{ required: false, message: 'Please enter user info' }],
                                initialValue: User.Info,
                            })(<Input placeholder="Please enter user info" />)}
                        </Form.Item>

                        <Form.Item label="Github">
                            {getFieldDecorator('Github', {
                                rules: [{ required: false, message: 'Please enter user github' }],
                                initialValue: User.Github,
                            })(<Input placeholder="Please enter user github" />)}
                        </Form.Item>

                        <Form.Item label="Blog" >
                            {getFieldDecorator('Chrome', {
                                rules: [{ required: false, message: 'Please enter user Blog' }],
                                initialValue: User.Chrome,
                            })(<Input placeholder="Please enter user Blog" />)}
                        </Form.Item>

                        <Form.Item label="WeChat" >
                            {getFieldDecorator('WeChat', {
                                rules: [{ required: false, message: 'Please enter user WeChat' }],
                            })(<Input placeholder="Please enter user WeChat" />)}
                        </Form.Item>
                    </Form>
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e9e9e9',
                            padding: '10px 16px',
                            background: '#fff',
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={this.handleUp} type="primary">
                            Submit
                        </Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}

const App = Form.create()(DrawerForm)

export default (App);