import React from "react";
import { List, Card, Divider, Icon, Tag } from "antd";
import "./home.css";

const { Meta } = Card;
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

class App extends React.Component {
  state = {};

  render() {
    return (
      <List
        className="listStyle"
        dataSource={data}
        pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          footer={
            <div className="listFoot">
              <b>ant design</b> footer part
            </div>
          }
        renderItem={item => (
          <List.Item>
            <Card hoverable={true} className="cards">
              <Divider orientation="left">
                <span className="title">ES6 + TypeScript</span>
              </Divider>
              <Meta description="2019-07-01" />
              <p>
                Card contentCard contentCard contentCard contentCard contentCard
                contentCard contentCard contentCard contentCard contentCard
                content
              </p>
              <p>
                Card contentCard contentCard contentCard contentCard contentCard
                contentCard contentCard contentCard contentCard contentCard
                content
              </p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
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
