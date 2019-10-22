import React from "react";
import "./anchor.css";
import { Anchor } from "antd";

const { Link } = Anchor;

class App extends React.Component {
  render() {
    return (
      <Anchor offsetTop="120" className="anchor">
        <Link href="#components-anchor-demo-basic1" title="Basic demo" />
        <Link href="#components-anchor-demo-static2" title="Static demo" />
        <Link href="#components-anchor-demo-basic3" title="Basic demo" />
        <Link href="#components-anchor-demo-static4" title="Static demo" />
        <Link href="#components-anchor-demo-basic5" title="Basic demo" />
        <Link href="#components-anchor-demo-static6" title="Static demo" />
        <Link href="#components-anchor-demo-basic7" title="Basic demo" />
        <Link href="#components-anchor-demo-static8" title="Static demo" />
        <Link href="#components-anchor-demo-basic9" title="Basic demo" />
        <Link href="#components-anchor-demo-static0" title="Static demo" />
        <Link href="#components-anchor-demo-basic11" title="Basic demo" />
        <Link href="#components-anchor-demo-static12" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link> 
      </Anchor>
    );
  }
}

export default App;
