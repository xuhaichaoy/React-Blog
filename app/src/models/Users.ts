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
    passWord: obj.Sequelize.BIGINT,
    Info: obj.Sequelize.BIGINT,
    Github: obj.Sequelize.BIGINT,
    image: obj.Sequelize.BIGINT,
    Date: obj.Sequelize.BIGINT,
    admin: obj.Sequelize.BIGINT,
}, {
    timestamps: false
})

UserModel
  .sync()
  .then(() => {
    console.log('table初始化完成！')
  })
  .catch(() => {
    console.log('init db error')
  })

export default UserModel





