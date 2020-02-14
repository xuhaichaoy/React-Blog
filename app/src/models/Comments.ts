import jwt from '../config/jwt'
import dateBase from '../mysql'
const CommentModel = dateBase.CommentModel

CommentModel.fetch = async function (articalId: number) {

    let r = {}
    await CommentModel.findAndCountAll({
        // 获取所有信息
        where: {
            aid: articalId
        },
        order: [
            ['aid', 'DESC'],
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

CommentModel.sendComment = async function (res: any, token: any) {
    const currentUser = jwt.check(token.jwt)
    const uid = currentUser.uid
    const articleId = res.articalId
    const content = res.content
    let r = {}
    
    await CommentModel.create({
        // 获取所有信息
        uid: uid,
        aid: articleId,
        comments: content,
        Date: res.date
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


export default CommentModel
