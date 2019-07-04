import React from "react";
import "./anchor.css";
import { Anchor } from "antd";

const { Link } = Anchor;

class App extends React.Component {
  render() {
    return (
      <Anchor offsetTop="120" className="anchor">
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link> 
      </Anchor>
    );
  }
}

export default App;
