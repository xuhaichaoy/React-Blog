"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
// Option 1: Passing parameters separately
var sequelize = new Sequelize('blog', 'root', 'haichao', {
    host: '106.13.113.36',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
sequelize
    .authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
})
    .catch(function () {
    console.log('Unable to connect to the database');
});
var data = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
exports.default = data;
//# sourceMappingURL=mysql.js.map