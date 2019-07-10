import obj from '../config/mysql'

const UserModel = obj.sequelize.define('user', {
    // id: { type: obj.Sequelize.INTEGER, autoIncrement: true, primaryKeys: true, unique: true },
    // username: { type: obj.Sequelize.STRING, allowNull: false },
    // password: { type: obj.Sequelize.STRING, allowNull: false },
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

UserModel.sync().on('success', function () {
    console.log('aa..');
}).on('failure', function () {
    console.log('bb..');
});
export default UserModel





