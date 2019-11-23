import obj from '../config/mysql'
import jwt from '../config/jwt'
import fs from "fs"

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
    image: obj.Sequelize.TEXT,
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
        if (result.length > 0) {
            var data = JSON.parse(JSON.stringify(result[0]))
            delete data.admin
            delete data.uid
            delete data.passWord
            delete data.userName

            r = data
        } else {
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
        if (result.length > 0) {
            jwt.token.sign(JSON.parse(JSON.stringify(result[0])), jwt.secret, (err: any, token: any) => {
                r = {
                    data: {
                        status: 1,
                        msg: "success",
                        data: {
                            message: "登录成功",
                        },
                    },
                    token
                }
            });

        } else {
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
UserModel.logout = async function (token: any) {
    return token
    let logined = jwt.check(token.jwt)
    // delete logined["uid"]
    // delete logined["passWord"]
    // delete logined["admin"]
    // delete logined["iat"]
    // delete logined["userName"]

    // let r = {}
    // if (!logined) {
    //     r = {
    //         status: -1,
    //         msg: "当前未登录！"
    //     }
    // } else {
    //     // 登录状态 返回登录人的信息
    //     r = {
    //         status: 1,
    //         msg: "当前已登录！",
    //         data: logined
    //     }
    // }
    // return r
};

UserModel.getCurrentUser = async function (token: any) {
    let logined = jwt.check(token.jwt)
    delete logined["uid"]
    delete logined["passWord"]
    delete logined["admin"]
    delete logined["iat"]
    delete logined["userName"]

    let r = {}
    if (!logined) {
        r = {
            status: -1,
            msg: "当前未登录！"
        }
    } else {
        // 登录状态 返回登录人的信息
        r = {
            status: 1,
            msg: "当前已登录！",
            data: logined
        }
    }
    return r
};

UserModel.writePic = async function (imgfile: any) {
    var base64Data = imgfile.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = Buffer.from(base64Data, 'base64');
    let name = new Date().getTime().toString();
    let url = './upload/' + name + '.png'
    await fs.writeFile(url, dataBuffer, function (err: any) {
        if (err) {
            url = ''
        }
    });
    return url
    
}

UserModel.changeData = async function (data: any, token: any) {
    const currentUser = jwt.check(token.jwt)
    const uid = currentUser.uid
    let r = {}
    let imgfile = data.image


    if (imgfile) {
        imgfile = await UserModel.writePic(imgfile)
    }
    await UserModel.update({
        nickName: data.nickName,
        Info: data.Info,
        Github: data.Github,
        Chrome: data.Chrome,
        image: 'http://localhost:3000'+imgfile.slice(1),
    }, {
        where: {
            uid: uid
        }
    }
    ).then(function (result: any) {
        r = {
            status: 1,
            msg: "success",
            data: {
                message: "修改成功"
            }  // 正常
        }

    }).catch(function (err: any) {
        r = {
            status: -1000,
            msg: "error",
            data: {
                message: err
            }  // 正常
        }
    })
    return r
};



export default UserModel





