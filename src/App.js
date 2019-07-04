import React from 'react';
import Index from './page/index/index';
import { BackTop } from 'antd';
// import { Router, Route, Link } from 'react-router';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <BackTop />
        <Index></Index>
      </div>
    );
  }
}

export default App;
