import React from "react";
import { List, Card, Divider, Icon, Tag } from "antd";
import axios from '../../config/axios';
import "./home.css";

const { Meta } = Card;

class App extends React.Component {
  state = {
    allData: []
  };
  componentDidMount() {
    const _this = this
    axios.get('http://localhost:3000/allArticals')
      .then(function (r) {
        const { data } = r
        const res = data.data
        if (res.status === 1) {
          _this.setState({
            allData: res.list
          });
        }
      })
      .catch(function (error) {
        console.log(error);

      })
  }

  render() {
    return (
      <List
        className="listStyle"
        dataSource={this.state.allData}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 6,
        }}
        footer={
          <div className="listFoot">
            <b>haichao</b> 2019
          </div>
        }
        renderItem={item => (
          <List.Item>
            <Card hoverable={true} className="cards">
              <Divider orientation="left">
                <span className="title">{item.artical_name}</span>
              </Divider>
              <Meta description={item.Date} />
              <p className="articalContent">
               {item.content}
              </p>
             
              <Divider className="shuline" />
              <div className="cardsMessage">
                <ul>
                  <li>
                    <Icon type="message" />
                    <span className="messageNum">123123</span>
                  </li>
                  <li>
                    <Tag color="#f50">#f50</Tag>
                    <span className="messageNum">123123</span>
                  </li>
                  <li>
                    <Tag color="#108ee9">#108ee9</Tag>
                    <span className="messageNum">123123</span>
                  </li>
                </ul>
              </div>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default App;
