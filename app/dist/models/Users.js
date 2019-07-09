"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("../config/mysql"));
var UserModel = mysql_1.default.sequelize.define('user', {
    id: {
        type: mysql_1.default.Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
    },
    username: mysql_1.default.Sequelize.STRING(100),
    password: mysql_1.default.Sequelize.STRING(100),
    createdAt: mysql_1.default.Sequelize.BIGINT,
    updatedAt: mysql_1.default.Sequelize.BIGINT,
}, {
    timestamps: false
});
exports.default = UserModel;
//# sourceMappingURL=Users.js.map