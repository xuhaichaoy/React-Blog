import React from "react";
import lazy from '../../../component/lazy'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col, BackTop } from "antd";
import "./index.css";

const SideBar = lazy(() => import('../../../component/sidebar/sidebar'))
const Home = lazy(() => import('../../../component/home/home'))
const Anchor = lazy(() => import('../../../component/anchor/anchor'))
const Menu = lazy(() => import('../../../component/menu/menu'))
const Time = lazy(() => import('../time/time'))
const Category = lazy(() => import('../category/category'))
const Info = lazy(() => import('../introduce/info'))
const Detail = lazy(() => import('../detail/detail'))


class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Router>
          <Menu />
          <div className="gutter-example">
            <Row>
              <Col className="gutter-row barFixed" xs={6} sm={6} md={8} lg={5} xl={5}>
                <div className="gutter-box">
                  <SideBar></SideBar>
                </div>
              </Col>
              <Col className="gutter-row" xs={6} sm={6} md={8} lg={5} xl={5}></Col>
              <Col className="gutter-row" xs={14} sm={14} md={14} lg={15} xl={15}>
                <div className="gutter-box pageContent">
                  <div className="App">
                    <BackTop />
                    <Switch>
                      <Route exact path="/index" component={Home} />
                      <Route exact path="/time" component={Time} />
                      <Route exact path="/category" component={Category} />
                      <Route exact path="/intro" component={Info} />
                      <Route exact path="/detail/:id" component={Detail} />
                    </Switch>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" xs={4} sm={4} md={4} lg={4} xl={4}>
                <div className="gutter-box" style={{ paddingLeft: "40px" }}>
                  <Anchor></Anchor>
                </div>
              </Col>
            </Row>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
