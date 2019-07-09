"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("../config/mysql"));
mysql_1.default.sequelize
    .authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
})
    .catch(function () {
    console.log('Unable to connect to the database');
});
mysql_1.default.sequelize
    .sync()
    .then(function () {
    console.log('init db ok');
})
    .catch(function () {
    console.log('init db error');
});
//# sourceMappingURL=index.js.map