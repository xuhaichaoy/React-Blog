import obj from '../config/mysql'

const UserModel = obj.sequelize.define('user', {
    id: {
        type: obj.Sequelize.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
    },
    username: obj.Sequelize.STRING(100),
    password: obj.Sequelize.STRING(100),
    createdAt: obj.Sequelize.BIGINT,
    updatedAt: obj.Sequelize.BIGINT,
}, {
    timestamps: false
})
export default UserModel





