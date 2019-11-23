"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("../config/mysql"));
var jwt_1 = __importDefault(require("../config/jwt"));
var fs_1 = __importDefault(require("fs"));
var UserModel = mysql_1.default.sequelize.define('user', {
    uid: {
        type: mysql_1.default.Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
    },
    nickName: mysql_1.default.Sequelize.STRING(100),
    userName: {
        type: mysql_1.default.Sequelize.STRING(100),
        unique: true
    },
    passWord: mysql_1.default.Sequelize.STRING(100),
    Info: mysql_1.default.Sequelize.STRING(100),
    Github: mysql_1.default.Sequelize.STRING(100),
    Chrome: mysql_1.default.Sequelize.STRING(100),
    image: mysql_1.default.Sequelize.TEXT,
    Date: mysql_1.default.Sequelize.BIGINT,
    admin: mysql_1.default.Sequelize.BIGINT,
}, {
    timestamps: false
});
UserModel.sync();
UserModel.fetch = function () {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = {};
                    return [4 /*yield*/, UserModel.findAll({
                            where: {
                                admin: 1
                            }
                        }).then(function (result) {
                            if (result.length > 0) {
                                var data = JSON.parse(JSON.stringify(result[0]));
                                delete data.admin;
                                delete data.uid;
                                delete data.passWord;
                                delete data.userName;
                                r = data;
                            }
                            else {
                                r = {
                                    status: -2,
                                    msg: "success",
                                    data: "请稍后再试" // 正常
                                };
                            }
                        }).catch(function (err) {
                            r = {
                                status: -1000,
                                msg: "error",
                                data: err // 正常
                            };
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
UserModel.reg = function (data) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = {};
                    return [4 /*yield*/, UserModel.create({
                            userName: data.email,
                            passWord: data.password
                        }).then(function (result) {
                            r = {
                                status: 1,
                                msg: "success",
                                data: {
                                    message: "注册成功"
                                } // 正常
                            };
                        }).catch(function (err) {
                            r = {
                                status: -1000,
                                msg: "error",
                                data: {
                                    message: "用户名已存在"
                                } // 正常
                            };
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
UserModel.login = function (data) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = {};
                    return [4 /*yield*/, UserModel.findAll({
                            where: {
                                userName: data.email,
                                passWord: data.password
                            }
                        }).then(function (result) {
                            if (result.length > 0) {
                                jwt_1.default.token.sign(JSON.parse(JSON.stringify(result[0])), jwt_1.default.secret, function (err, token) {
                                    r = {
                                        data: {
                                            status: 1,
                                            msg: "success",
                                            data: {
                                                message: "登录成功",
                                            },
                                        },
                                        token: token
                                    };
                                });
                            }
                            else {
                                r = {
                                    status: -2,
                                    msg: "success",
                                    data: {
                                        message: "用户名或密码错误"
                                    } // 正常
                                };
                            }
                        }).catch(function (err) {
                            r = {
                                status: -1000,
                                msg: "error",
                                data: {
                                    message: "请稍后再试"
                                } // 正常
                            };
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
UserModel.logout = function (token) {
    return __awaiter(this, void 0, void 0, function () {
        var logined;
        return __generator(this, function (_a) {
            return [2 /*return*/, token];
        });
    });
};
UserModel.getCurrentUser = function (token) {
    return __awaiter(this, void 0, void 0, function () {
        var logined, r;
        return __generator(this, function (_a) {
            logined = jwt_1.default.check(token.jwt);
            delete logined["uid"];
            delete logined["passWord"];
            delete logined["admin"];
            delete logined["iat"];
            delete logined["userName"];
            r = {};
            if (!logined) {
                r = {
                    status: -1,
                    msg: "当前未登录！"
                };
            }
            else {
                // 登录状态 返回登录人的信息
                r = {
                    status: 1,
                    msg: "当前已登录！",
                    data: logined
                };
            }
            return [2 /*return*/, r];
        });
    });
};
UserModel.writePic = function (imgfile) {
    return __awaiter(this, void 0, void 0, function () {
        var base64Data, dataBuffer, name, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    base64Data = imgfile.replace(/^data:image\/\w+;base64,/, "");
                    dataBuffer = Buffer.from(base64Data, 'base64');
                    name = new Date().getTime().toString();
                    url = './upload/' + name + '.png';
                    return [4 /*yield*/, fs_1.default.writeFile(url, dataBuffer, function (err) {
                            if (err) {
                                url = '';
                            }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, url];
            }
        });
    });
};
UserModel.changeData = function (data, token) {
    return __awaiter(this, void 0, void 0, function () {
        var currentUser, uid, r, imgfile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentUser = jwt_1.default.check(token.jwt);
                    uid = currentUser.uid;
                    r = {};
                    imgfile = data.image;
                    if (!imgfile) return [3 /*break*/, 2];
                    return [4 /*yield*/, UserModel.writePic(imgfile)];
                case 1:
                    imgfile = _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, UserModel.update({
                        nickName: data.nickName,
                        Info: data.Info,
                        Github: data.Github,
                        Chrome: data.Chrome,
                        image: 'http://localhost:3000' + imgfile.slice(1),
                    }, {
                        where: {
                            uid: uid
                        }
                    }).then(function (result) {
                        r = {
                            status: 1,
                            msg: "success",
                            data: {
                                message: "修改成功"
                            } // 正常
                        };
                    }).catch(function (err) {
                        r = {
                            status: -1000,
                            msg: "error",
                            data: {
                                message: err
                            } // 正常
                        };
                    })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
exports.default = UserModel;
