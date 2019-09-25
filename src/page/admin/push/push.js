import React from "react";
import { Tabs, Icon, List, Card } from 'antd';
import api from '../../../config/http';
import "./push.css";

const { TabPane } = Tabs;
class App extends React.Component {
    state = {
        allData: [],
    };

    componentDidMount() {
        const _this = this
        api.allenter({}, (r) => {
            const { data } = r
            const res = data.data
            if (res.status === 1) {
                _this.setState({
                    allData: res.data
                });
            }
        })
    }

    render() {
        return (
            <div className="enter">
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
                        <List
                            grid={{ gutter: 16, column: 4 }}
                            dataSource={this.state.allData}
                            renderItem={item => (
                                <a href={item.href} target="_blank">
                                    <List.Item>
                                        <Card title={item.title}>
                                            作者： {item.achour}
                                        </Card>
                                    </List.Item> 
                                </a>
                            )}
                        />
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
