import obj from '../config/mysql'
const UserModel = obj.sequelize.define('user', {
    // id: { type: obj.Sequelize.INTEGER, autoIncrement: true, primaryKeys: true, unique: true },
    // username: { type: obj.Sequelize.STRING, allowNull: false },
    // password: { type: obj.Sequelize.STRING, allowNull: false },
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
// UserModel.sync()
(async () => {
    const user = await UserModel.create({
        uid: 1,
        nickName: 'chao',
        userName: 'haichao',
        passWord: '1234'
    }).then(function (result: any) {
        console.log("ok")
    }).catch(function (err: any) {
        console.log("no")
    })
})()
// UserModel.sync()
// .on('success', function () {
//     console.log('aa..');
// }).on('failure', function () {
//     console.log('bb..');
// });
export default UserModel





