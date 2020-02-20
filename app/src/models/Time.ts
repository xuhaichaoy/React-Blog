import jwt from '../config/jwt'
import dateBase from '../mysql'
const TimeModel = dateBase.TimeModel

TimeModel.fetch = async function () {
    let r = {}
    await TimeModel.findAndCountAll({
        // 获取所有信息
        attributes: ['tid', 'Date', 'content', 'status', 'special'],
        order: [
            ['tid', 'DESC'],
        ],
    }).then(function (result: any) {
        r = {
            status: 1,
            msg: "success",
            list: JSON.parse(JSON.stringify(result))
        }
    }).catch(function (err: any) {
        r = {
            status: -1000,
            msg: "error",
            data: err
        }
    })
    return r
    
};

TimeModel.sendComment = async function (res: any, token: any) {
    const currentUser = jwt.check(token.jwt)
    const uid = currentUser.uid
    const articleId = res.articalId
    const content = res.content
    let r = {}

    await TimeModel.create({
        // 获取所有信息
        uid: uid,
        aid: articleId,
        comments: content,
        Date: res.date,
    }).then(function (result: any) {
        r = {
            status: 1,
            msg: "success",
            data: {
                message: "发布成功"
            }  // 正常
        }

    }).catch(function (err: any) {
        r = {
            status: -1000,
            msg: "error",
            data: err
        }
    })
    return r
};


export default TimeModel
