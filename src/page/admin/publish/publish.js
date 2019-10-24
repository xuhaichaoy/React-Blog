import React from "react"
import LeftMenu from "../../../component/adminLeft/left"
import { Layout, Button, Modal, Form, Input, Radio } from 'antd'
import api from '../../../config/http'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/shadowfox.css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/vue/vue'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/hint/css-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/fold/brace-fold'
import "./publish.css";

const { Content, Sider } = Layout;

const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight")
const converter = new showdown.Converter({
    extensions: [showdownHighlight]
});

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Create a new collection"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Title">
                            {getFieldDecorator('artical_name', {
                                rules: [{ required: true, message: 'Please input the title of collection!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('description')(<Input type="textarea" />)}
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group>
                                    <Radio value="public">Public</Radio>
                                    <Radio value="private">Private</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ``,
            loading: false,
            iconLoading: false,
            visible: false,
        }
    }

    handleClick = () => {
       
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
    }

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const _this = this
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            const md = converter.makeHtml(this.state.value)
            values["content"] = md
            api.publishArtical(values, (r) => {
                const { data } = r
                const res = data.data
                console.log(res)
                if (res.status === 1) {
    
                }
            })

            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

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
                        <div className="editPublish">
                            <CodeMirror
                                value={this.state.value}
                                options={{
                                    theme: 'shadowfox',
                                    tabSize: 2,
                                    keyMap: 'sublime',
                                    mode: 'markdown',
                                    extraKeys: { "Ctrl": "autocomplete" },
                                    lineNumbers: true,
                                    foldGutter: true,
                                    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                                }}
                                onChange={this.handleChange}
                            />
                            <Button type="primary" loading={this.state.loading} onClick={this.showModal} className="publishButton">
                                Publish !
                            </Button>
                            <CollectionCreateForm
                                wrappedComponentRef={this.saveFormRef}
                                visible={this.state.visible}
                                onCancel={this.handleCancel}
                                onCreate={this.handleCreate}
                            />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
