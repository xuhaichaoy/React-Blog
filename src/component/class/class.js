import React from "react";
import { Tag } from "antd";

import "./class.css";

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
      <div className="pageTag">
        <Tag className="taggs" color="magenta">magenta</Tag>
        <Tag className="taggs" color="red">red</Tag>
        <Tag className="taggs" color="volcano">volcano</Tag>
        <Tag className="taggs" color="orange">orange</Tag>
        <Tag className="taggs" color="gold">gold</Tag>
        <Tag className="taggs" color="lime">lime</Tag>
        <Tag className="taggs" color="green">green</Tag>
        <Tag className="taggs" color="cyan">cyan</Tag>
        <Tag className="taggs" color="blue">blue</Tag>
        <Tag className="taggs" color="geekblue">geekblue</Tag>
        <Tag className="taggs" color="purple">purple</Tag>
        <Tag className="taggs" color="lime">lime</Tag>
        <Tag className="taggs" color="green">green</Tag>
        <Tag className="taggs" color="cyan">cyan</Tag>
        <Tag className="taggs" color="blue">blue</Tag>
        <Tag className="taggs" color="geekblue">geekblue</Tag>
        <Tag className="taggs" color="purple">purple</Tag>
        <Tag className="taggs" color="lime">lime</Tag>
        <Tag className="taggs" color="green">green</Tag>
        <Tag className="taggs" color="cyan">cyan</Tag>
        <Tag className="taggs" color="blue">blue</Tag>
        <Tag className="taggs" color="geekblue">geekblue</Tag>
        <Tag className="taggs" color="purple">purple</Tag>
        <Tag className="taggs" color="lime">lime</Tag>
        <Tag className="taggs" color="green">green</Tag>
        <Tag className="taggs" color="cyan">cyan</Tag>
        <Tag className="taggs" color="blue">blue</Tag>
        <Tag className="taggs" color="geekblue">geekblue</Tag>
        <Tag className="taggs" color="purple">purple</Tag>
        <Tag className="taggs" color="lime">lime</Tag>
        <Tag className="taggs" color="green">green</Tag>
        <Tag className="taggs" color="cyan">cyan</Tag>
        <Tag className="taggs" color="blue">blue</Tag>
        <Tag className="taggs" color="geekblue">geekblue</Tag>
        <Tag className="taggs" color="purple">purple</Tag>
      </div>
    );
  }
}

export default App;
