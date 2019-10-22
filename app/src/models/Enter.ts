import obj from '../config/mysql'

const EnterArtical = obj.sequelize.define('enterartical', {
    aid: {
        type: obj.Sequelize.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
        // 文章ID
    },
    artical_name: obj.Sequelize.STRING(100),
    artical_achour: obj.Sequelize.STRING(100),
    artical_href: obj.Sequelize.STRING(100),
}, {
    timestamps: false
})

EnterArtical.fetch = async function () {
    let r = {}
    await EnterArtical.findAll({
        // 获取所有信息
        limit: 24,

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

export default EnterArtical





