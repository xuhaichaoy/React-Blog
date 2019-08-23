import obj from '../config/mysql'
const UserModel = obj.sequelize.define('user', {
<<<<<<< HEAD
    // id: { type: obj.Sequelize.INTEGER, autoIncrement: true, primaryKeys: true, unique: true },
    // username: { type: obj.Sequelize.STRING, allowNull: false },
    // password: { type: obj.Sequelize.STRING, allowNull: false },
=======
>>>>>>> 0a2842895a050d4b95061f6eb8e0d13a1fff931d
    uid: {
        type: obj.Sequelize.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
    },
    nickName: obj.Sequelize.STRING(100),
    userName: obj.Sequelize.STRING(100),
<<<<<<< HEAD
    passWord: obj.Sequelize.BIGINT,
    Info: obj.Sequelize.BIGINT,
    Github: obj.Sequelize.BIGINT,
    image: obj.Sequelize.BIGINT,
=======
    passWord: obj.Sequelize.STRING(100),
    Info: obj.Sequelize.STRING(100),
    Github: obj.Sequelize.STRING(100),
    image: obj.Sequelize.STRING(100),
>>>>>>> 0a2842895a050d4b95061f6eb8e0d13a1fff931d
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


<<<<<<< HEAD
UserModel
  .sync()
  .then(() => {
    console.log('table初始化完成！')
  })
  .catch(() => {
    console.log('init db error')
  })

=======
>>>>>>> 0a2842895a050d4b95061f6eb8e0d13a1fff931d
export default UserModel





