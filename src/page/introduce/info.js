import React from "react";
import Info from "../../component/info/info"
import "./info.css";

class App extends React.Component {
  render() {
    return (
      <div className="gutter-box" className="pageContent">
        <Info></Info>
      </div>
    );
  }
}

export default App;
