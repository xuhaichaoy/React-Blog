import React from "react";
import { Comment, Avatar, Form, Button, List, Input, message } from "antd"
import moment from "moment"
import api from '../../config/http'

import "./comment.css";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    className="listStyle"
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div className="leave">
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
        className="launch"
      >
        发布
      </Button>
    </Form.Item>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      submitting: false,
      value: "",
      hc_login: {}
    };
  }

  componentDidMount() {
    // todo 
    // 登录上 信息变化
    // 退出登录 信息变化  
    // 等等 
    const hc_login = localStorage.getItem("hc_login")
    if (hc_login) {
      this.setState({
        hc_login: JSON.parse(hc_login)
      })
    }else {
      this.setState({
        hc_login: {}
      })
    }
  }

  handleSubmit = () => {
    const _this = this
    if (!this.state.value.trim()) {
      message.warning('请填写留言');
      return;
    }
    const hc_login = localStorage.getItem("hc_login")
    if (!hc_login) {
      message.warning('登录后留言');
      return
    }

    const params = {
      articalId: this.props.articalId,
      content: this.state.value
    }
    // axios 请求 数据
    api.sendComment(params, (r) => {
      const { data } = r
      const res = data.data
      if (res.status === 1) {
        _this.setState({
          detailData: res.list[0]
        })
      }
    })

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: this.state.hc_login.nickName,
            avatar: this.state.hc_login.image,
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    return (
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ marginBottom: "10px" }}>Comments</h3>
        <Comment
          avatar={
            <Avatar
              src={this.state.hc_login.image}
              alt={this.state.hc_login.nickName}
            />
          }
          content={
            <Editor
              onChange={this.handleChange}margin
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
        {comments.length > 0 && <CommentList comments={comments} />}

      </div>
    );
  }
}

export default App;
