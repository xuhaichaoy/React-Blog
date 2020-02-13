import jwt from '../config/jwt'
import fs from "fs"
import dateBase from '../mysql'
const UserModel = dateBase.UserModel

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
                let res = JSON.parse(JSON.stringify(result[0]))
                delete res["admin"]
                r = {
                    data: {
                        status: 1,
                        msg: "success",
                        data: res
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
    let url: any

    if (imgfile.length > 1000) {
        imgfile = await UserModel.writePic(imgfile)
        url = 'http://localhost:3000' + imgfile.slice(1)
    } else {
        url = data.image
    }
    await UserModel.update({
        nickName: data.nickName,
        Info: data.Info,
        Github: data.Github,
        Chrome: data.Chrome,
        image: url,
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
                nickName: data.nickName,
                Info: data.Info,
                Github: data.Github,
                Chrome: data.Chrome,
                image: url,
            }
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





