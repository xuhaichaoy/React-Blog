import Novel from "../schedule/novel"

const schedule = require('node-schedule')

// 指定多个规则
// 推荐使用 `Recurrence Rule Scheduling` 风格，便于理解
const Rule1 = new schedule.RecurrenceRule()

Rule1.hour = [0, 6, 12, 18, 17]
Rule1.minute = [0]
// 一个规则支持多个条件 可以设置
// Rule1.second 秒
// Rule1.minute 分
// Rule1.hour 小时
// Rule1.date  日期
// Rule1.month 月份
// Rule1.year 年份
// Rule1.dayOfWeek 每周几

const Schedule = {
    startSchedule() {
        schedule.scheduleJob(Rule1, function () {
            Novel.fetch()
        })
    }
}

export default Schedule
