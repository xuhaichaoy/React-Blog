const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('blog', 'root', 'haichao', {
    host: '106.13.113.36',
    dialect: 'mysql', // 或者一些其他的数据库
    pool: { // 连接池的一些相关配置
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(() => {
        console.log('Unable to connect to the database')
    })
const data = {
    Sequelize,
    sequelize
}
export default data