import obj from '../config/mysql'
import jwt from '../config/jwt'
import dateBase from '../mysql'
const ArticalModel = dateBase.ArticalModel
const Op = obj.Sequelize.Op

ArticalModel.fetch = async function (page: number, search: string) {
    search = search.trim()
    let confition = {}
    if (search) {
        confition = {
            artical_name: {
                [Op.like]: '%' + search + '%',
            },
            aid: {
                [Op.ne]: 99999
            }
        }
    }else {
        confition = {
            aid: {
                [Op.ne]: 99999
            }
        } 
    }

    let r = {}
    await ArticalModel.findAndCountAll({
        // 获取所有信息
        attributes: ['aid', 'artical_name', 'content'],
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
ArticalModel.fetchMine = async function (page: number) {
    let r = {}
    await ArticalModel.findAndCountAll({
        // 获取所有信息
        attributes: ['aid', 'artical_name'],
        limit: 6,
        offset: (page - 1) * 6,
        order: [
            ['aid', 'DESC'],
        ],
        where: {
            aid: {
                [Op.ne]: 99999
            }
        }
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
ArticalModel.detail = async function (id: number) {
    let r = {}
    await ArticalModel.findAll({
        attributes: ['aid', 'artical_name', 'content'],
        // 获取所有信息
        where: {
            aid: id
        },
        // include: {
        //     // 需要联表查询
        //     // todo
        // }
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
}
ArticalModel.publish = async function (value: any) {
    const myDate = new Date()
    let r = {}
    await ArticalModel.create({
        // 获取所有信息
        cid: 1,
        artical_status: 1,
        artical_name: value.artical_name,
        content: value.content,
        values: value.values,
        Date: myDate
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
ArticalModel.list = async function () {
    let r = {}
    await ArticalModel.findAll({
        attributes: ['aid', 'artical_name'],
        // 获取所有信息
        limit: 7,
        order: [
            ['aid', 'DESC'],
        ],
        where: {
            aid: {
                [Op.ne]: 99999
            }
        }
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
ArticalModel.delete = async function (value: any, token: any) {
    const currentUser = jwt.check(token.jwt)
    const uid = currentUser.uid
    let r = {}
    await ArticalModel.destroy({
        where: {
            cid: uid,
            aid: value.aid
        }
    }).then(function (result: any) {
        r = {
            status: 1,
            msg: "success",
            data: {
                message: "删除成功"
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




export default ArticalModel
