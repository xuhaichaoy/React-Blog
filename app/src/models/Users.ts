import obj from '../config/mysql'
import jwt from '../config/jwt'

const UserModel = obj.sequelize.define('user', {
    uid: {
        type: obj.Sequelize.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
    },
    nickName: obj.Sequelize.STRING(100),
    userName: {
        type: obj.Sequelize.STRING(100),
        unique: true
    },
    passWord: obj.Sequelize.STRING(100),
    Info: obj.Sequelize.STRING(100),
    Github: obj.Sequelize.STRING(100),
    Chrome: obj.Sequelize.STRING(100),
    image: obj.Sequelize.STRING(100),
    Date: obj.Sequelize.BIGINT,
    admin: obj.Sequelize.BIGINT,
}, {
        timestamps: false
}) 
UserModel.sync();
UserModel.fetch = async function () {
    let r = {}
    await UserModel.findAll({
        where: {
           admin: 1
        }
    }).then(function (result: any) {
        if(result.length > 0) {
            var data = JSON.parse(JSON.stringify(result[0]))
            delete data.admin
            delete data.uid
            delete data.passWord
            delete data.userName

            r = data
        }else {
            r = {
                status: -2,
                msg: "success",
                data: "请稍后再试"  // 正常
            }
        }
    }).catch(function (err: any) {
        r = {
            status: -1000,
            msg: "error",
            data: err  // 正常
        }
    })
    return r
};
UserModel.reg = async function (data: any) {
    let r = {}
    await UserModel.create({
        userName: data.email,
        passWord: data.password
    }).then(function (result: any) {
        r = {
            status: 1,
            msg: "success",
            data: {
                message: "注册成功"
            }  // 正常
        }
       
    }).catch(function (err: any) {
        r = {
            status: -1000,
            msg: "error",
            data: {
                message: "用户名已存在"
            }  // 正常
        }
    })
    return r
};

UserModel.login = async function (data: any) {
    let r = {}
    await UserModel.findAll({
        where: {
            userName: data.email,
            passWord: data.password
        }
    }).then(function (result: any) {
        if(result.length > 0) {
            jwt.token.sign(JSON.parse(JSON.stringify(result[0])), jwt.secret, (err: any, token: any) => {
                r = {
                    data: {
                        status: 1,
                        msg: "success",
                        data: {
                            message: "登录成功",
                        }
                    },
                    token
                }
            });
           
        }else {
            r = {
                status: -2,
                msg: "success",
                data: {
                    message: "用户名或密码错误"
                }  // 正常
            }
        }
      
    }).catch(function (err: any) {
        r = {
            status: -1000,
            msg: "error",
            data: {
                message: "请稍后再试"
            }  // 正常
        }
    })
    return r
};


export default UserModel





