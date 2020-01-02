import React from "react";
import LeftMenu from "../../../component/adminLeft/left";
import { Layout, Button, Modal, Form, Input, Radio, message } from "antd";
import api from "../../../config/http";
import { withRouter } from "react-router-dom";
import CodeMirror from "react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/shadowfox.css";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/sass/sass";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/sql/sql";
import "codemirror/mode/vue/vue";
import "codemirror/keymap/sublime.js";
import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/fold/brace-fold";
import "./publish.css";

const { Content, Sider } = Layout;

const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");
const converter = new showdown.Converter({
  extensions: [showdownHighlight]
});

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
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
              {getFieldDecorator("artical_name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator("modifier", {
                initialValue: "public"
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ``,
      loading: false,
      iconLoading: false,
      visible: false
    };
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const hide = message.loading("Action in progress..", 0);
      const md = converter.makeHtml(this.state.value);
      values["content"] = md;
      values["values"] = this.state.value;
      api.publishArtical(values, r => {
        const { data } = r;
        const res = data.data;
        if (res.status === 1) {
          setTimeout(hide, 0);
          message.success("Released successfully");
          setTimeout(() => {
            this.props.history.push("/index");
          }, 1600);
        } else {
          message.warning("Publishing failed try again later ");
        }
      });

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
        <Content>
          <div className="editPublish">
            <CodeMirror
              value={this.state.value}
              options={{
                theme: "shadowfox",
                tabSize: 2,
                keyMap: "sublime",
                mode: "markdown",
                extraKeys: { Ctrl: "autocomplete" },
                lineNumbers: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
              }}
              onChange={this.handleChange}
            />
            <Button
              type="primary"
              loading={this.state.loading}
              onClick={this.showModal}
              className="publishButton"
            >
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
    );
  }
}

export default withRouter(App);
