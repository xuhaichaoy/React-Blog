import React from "react";
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import "echarts/lib/component/polar";

import "./pie.css";

class App extends React.Component {

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('mainBar'));

        // 绘制图表
        myChart1.setOption({
            angleAxis: {
            },
            radiusAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四'],
                z: 10
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [1, 2, 3, 4],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a'
            }, {
                type: 'bar',
                data: [2, 4, 6, 8],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a'
            }, {
                type: 'bar',
                data: [1, 2, 3, 4],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a'
            }],
            legend: {
                show: true,
                data: ['A', 'B', 'C'],
                orient: 'vertical',
                x: 'right'
            }
        });
    }
    render() {
        return (
            <div id="mainBar" style={{ width: "100%", height: 390, textAlign: "left", marginTop: "20px" }}></div>
        );
    }
}

export default App;
