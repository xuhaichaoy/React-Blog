import React from "react";
import { Tabs, Statistic, Row, Col, Icon, Divider, Card } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';

import "./right.css";


const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
        )}
    </Sticky>
);

function callback(key) {
    console.log(key);
}

class App extends React.Component {

    render() {
        return (
            <StickyContainer>
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                    <TabPane tab="Current" key="1" className="tabLists">
                        <h4 style={{ marginBottom: "16px" }}>Total Revenue</h4>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Statistic value={1128} prefix={<Icon type="like" />} valueStyle={{ textAlign: "center", fontSize: "30px", lineHeight: "45px" }} />

                            </Col>
                            <Col span={12}>
                                <Statistic
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600', fontSize: "20px", lineHeight: "45px", textAlign: "right" }}
                                    prefix={<Icon type="arrow-up" />}
                                    suffix="%"
                                />
                            </Col>
                        </Row>

                        <h4 style={{ marginTop: "20px", marginBottom: "16px" }}>Viewed</h4>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Statistic value={93} suffix="/ 100" valueStyle={{ textAlign: "center", fontSize: "30px" }} />
                            </Col>
                            <Col span={12}>
                                <Statistic
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322', fontSize: "20px", lineHeight: "45px", textAlign: "right" }}
                                    prefix={<Icon type="arrow-down" />}
                                    suffix="%"
                                />
                            </Col>
                        </Row>
                        <Divider />
                        <Row gutter={16} className="verCards">
                            <Col span={24}>
                                <Card hoverable className="cards">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card hoverable className="cards">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card hoverable className="cards">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card hoverable className="cards">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card hoverable className="cards">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card hoverable className="cards">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card hoverable className="cards">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card hoverable className="cards">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card hoverable className="cards">
                                    Card content
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2" className="tabLists">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3" className="tabLists">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </StickyContainer>
        );
    }
}

export default App;
