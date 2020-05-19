"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
// Option 1: Passing parameters separately
var sequelize = new Sequelize('blog', 'root', 'haichao6909', {
    host: '117.51.139.177',
    dialect: 'mysql',
    port: 3308,
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
