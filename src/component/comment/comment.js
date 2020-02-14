import React from "react";
import { Comment, Avatar, Form, Button, List, Input, message } from "antd"
import store from "../../store/index"
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
      store: store.getState(),
    };
    store.subscribe(this.storeChange)
  }

  storeChange = () => {
    this.setState({
      store: store.getState()
    })
  }

  componentDidMount() {
    // todo 
    // 路由变化时 需要重新拉数据
    const _this = this

    api.detailComment({
      articalId: this.props.articalId
    }, (r) => {
      // 评论
      const { data } = r.data
      const res = data
      if (res.status === 1) {

        let arr = res.list.rows
        for (let i = 0; i < arr.length; i++) {
          arr[i].author = arr[i].user.nickName ? arr[i].user.nickName : "游客"
          arr[i].avatar = arr[i].user.image ? arr[i].user.image: 'https://avatar.csdnimg.cn/D/5/7/3_qq_34648151.jpg'
          arr[i].content = arr[i].comments
          arr[i].datetime = arr[i].Date
        }
        _this.setState({
          comments: arr
        })
      }
    })

  }

  handleSubmit = () => {
    const _this = this
    if (!this.state.value.trim()) {
      message.warning('请填写留言');
      return;
    }
    if (!this.state.store.login) {
      message.warning('登录后留言');
      return
    }

    const params = {
      articalId: this.props.articalId,
      content: this.state.value,
      date: new Date().getTime()
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
            author: this.state.store.useInfo.nickName,
            avatar: this.state.store.useInfo.image,
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
              src={this.state.store.useInfo.image}
              alt={this.state.store.useInfo.nickName}
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
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
