import React from "react";
import "./anchor.css";
import { Anchor } from "antd";

const { Link } = Anchor;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    const data = this.props.data
    return (
      <Anchor offsetTop={120} className="anchor">
        {data.map((item, index) => 
          <Link key = {index} href={"#aid" + index} title={item.artical_name} />
        )}
      </Anchor>
    );
  }
}

export default App;
