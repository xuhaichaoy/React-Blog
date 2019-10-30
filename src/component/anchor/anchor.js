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

  componentDidMount() {
  }

  getAnchorList = (str) => {
    if(typeof str !== "string") {
      return []
    } 
    const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g
    const list = []
    function pushItem(arr, item) {
      const len = arr.length
      const matchItem = arr[len - 1]
      if (matchItem && matchItem.tag !== item.tag) {
        pushItem(matchItem.children, item)
      } else {
        arr.push(item)
      }
    }
    str.replace(pattern, ($0, $1) => {
      const title = $0.replace(/.*?>/, '')
      const startIndex = $0.indexOf('"')
      const endIndex = $0.indexOf('">')
      const href = `#${$0.slice(startIndex + 1, endIndex)}`
      const currentItem = {
        tag: $1, 
        title,
        href,
        children: []
      }
      pushItem(list, currentItem)
    })
    return list
  }

  homeRender = (data) => {
    return (
      data.map((item, index) =>
        <Link key={index} href={"#aid" + index} title={item.artical_name} />
      )
    )
  }

  detailRender = ({ href, title, children }) => {
    return (
      <Link key={href} href={href} title={title} >
        {children.length > 0 && children.map(sub => this.detailRender(sub))}
      </Link>
    )
  }

  render() {
    const data = this.props.data ? this.props.data : []
    if (this.props.flag) {
      const content = this.getAnchorList(data)
      return (
        <Anchor offsetTop={120} className="anchor">
          {content.map(this.detailRender)}
        </Anchor>
      );
    } else {
      return (
        <Anchor offsetTop={120} className="anchor">
          {this.homeRender(data)}
        </Anchor>
      );
    }

  }
}


export default App;
