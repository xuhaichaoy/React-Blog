import obj from '../config/mysql'
const UserModel = obj.sequelize.define('artical', {
    aid: {
        type: obj.Sequelize.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
        // 文章ID
    },
    cid: obj.Sequelize.BIGINT, // 作者ID
    artical_name: obj.Sequelize.STRING(100), // 文章名
    artical_status: obj.Sequelize.BIGINT, // 文章状态
    tag_id: obj.Sequelize.STRING(100), // 标签ID
    category_id: obj.Sequelize.STRING(100), // 分类ID
    viewCount: obj.Sequelize.STRING(100), // 阅读数量
    content:obj.Sequelize.TEXT, // 文章内容
    Date: obj.Sequelize.BIGINT, // 日期
}, {
        timestamps: false
})
UserModel.sync();
UserModel.fetch = async function () {
    let r = {}
    await UserModel.findAll({
        // 获取所有信息
    
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


export default UserModel





