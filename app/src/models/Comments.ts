import obj from '../config/mysql'
import jwt from '../config/jwt'
const CommentModel = obj.sequelize.define('comments', {
    cid: {
        type: obj.Sequelize.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
        // 文章ID  gindex
    },
    uid: {
        type: obj.Sequelize.BIGINT,
        allowNull: false
    }, //用户ID
    aid: {
        type: obj.Sequelize.BIGINT,
        allowNull: false
    }, // 评论ID
    Date: obj.Sequelize.BIGINT, // 日期
    comments: obj.Sequelize.TEXT //评论内容
}, {
    timestamps: false
})
CommentModel.sync();
CommentModel.fetch = async function (page: number, search: string) {
    search = search.trim()
    let confition = {}
    const Op = obj.Sequelize.Op
    if (search) {
        confition = {
            artical_name: {
                [Op.like]: '%' + search + '%',
            }
        }
    }

    let r = {}
    await CommentModel.findAndCountAll({
        // 获取所有信息
        where: confition,
        limit: 6,
        offset: (page - 1) * 6,
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
        comments: content
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
