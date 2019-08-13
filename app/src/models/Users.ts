import obj from '../config/mysql'
import { async } from 'q';
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
    var r = {}
    const user = await UserModel.findAll({
        uid: 3,
        nickName: 'chao',
        userName: 'haichao',
        passWord: '1234'
    }).then(function (result: any) {
        r = result
        // r = {
        //     name: 1,
        //     data: JSON.stringify(result)
        // }
    }).catch(function (err: any) {
        r = err
    })
    return r
};


export default UserModel





