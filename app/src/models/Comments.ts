import jwt from '../config/jwt'
import dateBase from '../mysql'
import obj from '../config/mysql'
const CommentModel = dateBase.CommentModel

const UserModel = dateBase.UserModel
const Op = obj.Sequelize.Op
CommentModel.fetch = async function (articalId: number) {

    let r = {}
    await CommentModel.findAndCountAll({
        // 获取所有信息
        where: {
            aid: articalId
        },
        order: [
            ['cid', 'DESC'],
        ],
    }).then(async function (result: any) {
        let arr: any = JSON.parse(JSON.stringify(result)).rows
        let obj: any = {}
        let array = []

        for (let i = 0; i < arr.length; i++) {
            obj[arr[i].uid] = 1
        }
        for (let key in obj) {
            array.push(parseInt(key))
        }
        let confition = {
            uid: {
                [Op.in]: array,
            }
        }

        await UserModel.findAll({
            attributes: ['nickName', 'image', 'uid'],
            where: confition,
        }).then(function (result: any) {
            let userArr: any = JSON.parse(JSON.stringify(result))
            let userObj: any = {}
            for (let i = 0; i < userArr.length; i++) {
                userObj[userArr[i].uid] = userArr[i]
            }

            for (let i = 0; i < arr.length; i++) {
                arr[i]['user'] = userObj[arr[i].uid]
            }
        }).catch(function (err: any) {
            r = {
                status: -1000,
                msg: "error",
                data: err  // 正常
            }
        })
        r = {
            status: 1,
            msg: "success",
            list: {
                count: JSON.parse(JSON.stringify(result)).count,
                rows: arr
            },
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


export default CommentModel
