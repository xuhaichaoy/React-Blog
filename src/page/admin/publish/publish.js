import React from "react"
import LeftMenu from "../../../component/adminLeft/left"
import { Layout, Button } from 'antd'

import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/shadowfox.css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/vue/vue'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/hint/css-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/fold/brace-fold'
import "./publish.css";

const { Content, Sider } = Layout;

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ``,
            loading: false,
            iconLoading: false,
        }
    }

    render() {
        return (
            <Layout>
                <Sider className="siderStyle"
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <LeftMenu />
                </Sider>
                <Layout style={{ marginLeft: "200px" }}>
                    <Content style={{ margin: '24px 16px' }}>
                        <div className="editPublish">
                            <CodeMirror
                                value={this.state.value}
                                options={{
                                    theme: 'shadowfox',
                                    tabSize: 2,
                                    keyMap: 'sublime',
                                    mode: 'markdown',
                                    extraKeys: { "Ctrl": "autocomplete" },
                                    lineNumbers: true,
                                    foldGutter: true,
                                    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                                }}
                            />
                            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading} className="publishButton">
                                Publish !
                            </Button>

                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
