import React from "react";
import lazy from '../../../component/lazy'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, BackTop } from "antd";
import "./index.css";

const SideBar = lazy(() => import('../../../component/sidebar/sidebar'))
const Home = lazy(() => import('../../../component/home/home'))
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
              <Col className="gutter-row" xs={18} sm={18} md={18} lg={19} xl={19}>
                <div className="gutter-box pageContent">
                  <div className="App">
                    <BackTop />
                    <Switch>
                      <Route path="/index" component={Home} />
                      <Route path="/index/:value" component={Home} />
                      <Route path="/time" component={Time} />
                      <Route path="/category" component={Category} />
                      <Route path="/intro" component={Info} />
                      <Route path="/detail/:id" component={Detail} />
                      <Redirect to = "/index"></Redirect>
                    </Switch>
                  </div>
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

