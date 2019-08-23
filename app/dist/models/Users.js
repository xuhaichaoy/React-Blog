"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("../config/mysql"));
var UserModel = mysql_1.default.sequelize.define('user', {
    // id: { type: obj.Sequelize.INTEGER, autoIncrement: true, primaryKeys: true, unique: true },
    // username: { type: obj.Sequelize.STRING, allowNull: false },
    // password: { type: obj.Sequelize.STRING, allowNull: false },
    uid: {
        type: mysql_1.default.Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
    },
    nickName: mysql_1.default.Sequelize.STRING(100),
    userName: mysql_1.default.Sequelize.STRING(100),
    passWord: mysql_1.default.Sequelize.BIGINT,
    Info: mysql_1.default.Sequelize.BIGINT,
    Github: mysql_1.default.Sequelize.BIGINT,
    image: mysql_1.default.Sequelize.BIGINT,
    Date: mysql_1.default.Sequelize.BIGINT,
    admin: mysql_1.default.Sequelize.BIGINT,
}, {
    timestamps: false
});
UserModel
    .sync()
    .then(function () {
    console.log('table初始化完成！');
})
    .catch(function () {
    console.log('init db error');
});
exports.default = UserModel;
//# sourceMappingURL=Users.js.map