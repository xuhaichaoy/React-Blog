import obj from '../config/mysql'
const UserModel = obj.sequelize.define('user', {
    uid: {
        type: obj.Sequelize.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
    },
    nickName: obj.Sequelize.STRING(100),
    userName: obj.Sequelize.STRING(100),
    passWord: obj.Sequelize.STRING(100),
    Info: obj.Sequelize.STRING(100),
    Github: obj.Sequelize.STRING(100),
    image: obj.Sequelize.STRING(100),
    Date: obj.Sequelize.BIGINT,
    admin: obj.Sequelize.BIGINT,
}, {
        timestamps: false
})
UserModel.sync();
UserModel.fetch = async function () {
    let r = {}
    await UserModel.findAll({
        where: {
            nickName: 'chao',
            userName: '111',
            passWord: '1234'
        }
    }).then(function (result: any) {
        r = {
            status: 1,
            msg: "success",
            data: JSON.parse(JSON.stringify(result))  // 正常
        }
    }).catch(function (err: any) {
        r = {
            status: -1000,
            msg: "error",
            data: err  // 正常
        }
    })
    return r
};


export default UserModel





