import React from "react"
import lazy from '../../../component/lazy'
import { Divider } from "antd"
import { withRouter } from "react-router-dom"
import api from '../../../config/http'
import "./detail.css"

const Anchor = lazy(() => import('../../../component/anchor/anchor'))
const Comment = lazy(() => import('../../../component/comment/comment'))
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articalId: 0,
            value: '',
            detailData: {
                artical_name: '',
                Date: ''
            },
            commentsData: []
        }
    }

    componentWillReceiveProps(prevProps, prevState) {
        this.componentDidMount()
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        const _this = this
        const url = window.location.href
        const params = url.slice(url.lastIndexOf('/') + 1)
        // console.log(params)
        if (!params) {
            return
        }
        this.setState({
            articalId: parseInt(params)
        })
        // axios 请求 数据
        api.detailArtical({
            articalId: params
        }, (r) => {
            // 文章内容
            const { data } = r
            const res = data.data
            if (res.status === 1) {
                _this.setState({
                    detailData: res.list[0]
                })
            }
        })

    }

    render() {
        const detail = this.state.detailData
        return (
            <div className="mainPage">
                <div className="mainContent">
                    <div className="gutter-box detailPage">
                        <div className="title">
                            <h2>{detail.artical_name}</h2>
                            <span>{detail.Date}</span>
                        </div>
                        <Divider />
                        <div className="detailContent">
                            <p dangerouslySetInnerHTML={{ __html: detail.content }}></p>
                        </div>
                        <Comment articalId={this.state.articalId} />

                    </div>
                </div>
                <div className="anchorStyle">
                    <div className="gutter-box" style={{ paddingLeft: "40px" }}>
                        <Anchor data={detail.content} flag={true}></Anchor>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(App);
