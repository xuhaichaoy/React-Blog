import React from "react";
import { Tabs, Icon } from 'antd';
import api from '../../../config/http';
import "./push.css";

const { TabPane } = Tabs;
class App extends React.Component {

    componentDidMount() {
        const _this = this
        api.allenter({}, (r) => {
          const { data } = r
          const res = data.data
          if (res.status === 1) {
            _this.setState({
              allData: res.list
            });
          }
        })
      }

    render() {
        return (
            <div className = "enter">
                <Tabs defaultActiveKey="1">
                    <TabPane
                        tab={
                            <span>
                                <Icon type="apple" />
                                Tab 1
                            </span>
                        }
                        key="1"
                    >
                        Tab 1111111111111111111
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Icon type="android" />
                                Tab 2
                            </span>
                        }
                        key="2"
                    >
                        Tab 2222222222222222222
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default App;
