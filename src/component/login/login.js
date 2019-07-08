import React from "react";
import { Form, Icon, Input, Button, Checkbox, Modal } from "antd";
import "./login.css";

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
    // 为了在回调函数中使用 this 绑定 this 必不可少
    // this.handleClick = this.handleClick.bind(this)
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  showReg= () => {
    console.log(this.state,111111)
    this.setState({
      regvisible: true,
      loginvisible: false,
    });
  }
  

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="content">
        <div className="loginForm">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot forget" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button login"
              >
                Log in
              </Button>
              Or <a onClick={this.showReg}>register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

class NormalRegForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };
  showLog = () => {
    console.log(2222222)
    this.setState({
      regvisible: false,
      loginvisible: true,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="content">
        <div className="loginForm">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>

            <Form.Item hasFeedback>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your password!"
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(
                <Input.Password
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "Please confirm your password!"
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(
                <Input.Password
                  onBlur={this.handleConfirmBlur}
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button login"
              >
                Reg in
              </Button>
              Or <a onClick={this.showLog}>Log now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalRegForm = Form.create({ name: "normal_reg" })(NormalRegForm);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    loginvisible: false,
    regvisible: false
  };

  showModal = () => {
    this.setState({
      loginvisible: true
    });
  };

  showRegModal = () => {
    this.setState({
      regvisible: true
    });
  };

  handleloginOk = e => {
    console.log(e);
    this.setState({
      loginvisible: false
    });
  };

  handleloginCancel = e => {
    console.log(e);
    this.setState({
      loginvisible: false
    });
  };

  handleregOk = e => {
    console.log(e);
    this.setState({
      regvisible: false
    });
  };

  handleregCancel = e => {
    console.log(e);
    this.setState({
      regvisible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          登录
        </Button>
        <Button onClick={this.showRegModal} className="reget">
          注册
        </Button>
        <Modal
          title="登录"
          visible={this.state.loginvisible}
          onOk={this.handleloginOk}
          onCancel={this.handleloginCancel}
          footer={null}
        >
          <WrappedNormalLoginForm />
        </Modal>
        <Modal
          title="注册"
          visible={this.state.regvisible}
          onOk={this.handleregOk}
          onCancel={this.handleregCancel}
          footer={null}
        >
          <WrappedNormalRegForm />
        </Modal>
      </div>
    );
  }
}

export default App;
