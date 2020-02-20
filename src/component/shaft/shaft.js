import React from "react";
import { Timeline, Icon, Pagination } from "antd";
import api from "../../config/http"
import "./shaft.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      allData: []
    };
  }

  // function onChange(pageNumber) {
  //     console.log('Page: ', pageNumber);
  // }

  componentDidMount() {
    const _this = this
    api.getTime({}, r => {
      const { data } = r;
      const res = data.data;
      if (res.status === 1) {
        _this.setState({
          allData: res.list.rows
        })
      }
    });
  }

  onChange = pageNumber => {
    console.log("click ", pageNumber);
    this.setState({
      current: pageNumber
    });
  };

  render() {
    return (
      <div className="timeline">
        <Timeline>

          {this.state.allData.map((item) => (
            <Timeline.Item

              dot={ parseInt(item.special) ? <Icon type="clock-circle-o" style={{ fontSize: "18px" }} /> : false}
              color = {item.status}
            >
              {
                parseInt(item.special) ? (
                  <span className="totalArctical">
                    {item.content}
                  </span>
                ) : item.content
              }
            </Timeline.Item>
          ))}
          
        </Timeline>
        <Pagination defaultCurrent={1} total={50} className="pagin" />
      </div>
    );
  }
}

export default App;
