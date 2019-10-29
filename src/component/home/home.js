import React from "react";
import lazy from '../lazy'
import { List, Card, Divider, Icon, Tag } from "antd";
import { withRouter } from "react-router-dom";
import api from '../../config/http';
import "./home.css";

const Anchor = lazy(() => import('../anchor/anchor'))
const { Meta } = Card;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    }
  };

  componentDidMount() {
    const _this = this
    api.allArticals({}, (r) => {
      const { data } = r
      const res = data.data
      if (res.status === 1) {
        _this.setState({
          allData: res.list
        });
      }
    })
  }

  watchDetail(e) {
    this.props.history.push('/detail/' + e)
  };

  render() {
    return (
      <div className="mainPage">
        <div className="mainContent">
          <List
            className="listStyle"
            dataSource={this.state.allData}
            pagination={{
              onChange: page => {
                console.log(page)
                window.scrollTo(0, 0)
              },
              pageSize: 6,
            }}
            footer={
              <div className="listFoot">
                <b>haichao</b> 2019
              </div>
            }
            renderItem={(item, index) => (
              <List.Item>
                <Card hoverable={true} className="cards" onClick={this.watchDetail.bind(this, item.aid)} id={"aid" + index}>
                  <Divider orientation="left">
                    <span className="title">{item.artical_name}</span>
                  </Divider>
                  <Meta description={item.Date} />
                  <p className="articalContent" dangerouslySetInnerHTML={{ __html: item.content }}></p>
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
        </div>
        <div className="anchorStyle">
          <div className="gutter-box" style={{ paddingLeft: "40px" }}>
            <Anchor data={this.state.allData}></Anchor>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
