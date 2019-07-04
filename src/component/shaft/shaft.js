import React from "react";
import { Timeline, Icon, Pagination } from "antd";

import "./shaft.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        };
    }

    // function onChange(pageNumber) {
    //     console.log('Page: ', pageNumber);
    // }
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
          <Timeline.Item>
              <span className="totalArctical">
                20 articles have been published
              </span>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: "18px" }} />}
            color="red"
          >
            <span className="year">2019···</span>
          </Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
        </Timeline>
        <Pagination defaultCurrent={1} total={50} className="pagin"/>
      </div>
    );
  }
}

export default App;
