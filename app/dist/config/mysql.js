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
var data = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
exports.default = data;
//# sourceMappingURL=mysql.js.map