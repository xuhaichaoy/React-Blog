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
var mysql_2 = __importDefault(require("../mysql"));
var ArticalModel = mysql_2.default.ArticalModel;
var Op = mysql_1.default.Sequelize.Op;
ArticalModel.fetch = function (page, search) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, confition, r;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    search = search.trim();
                    confition = {};
                    if (search) {
                        confition = {
                            artical_name: (_a = {},
                                _a[Op.like] = '%' + search + '%',
                                _a),
                            aid: (_b = {},
                                _b[Op.ne] = 99999,
                                _b)
                        };
                    }
                    else {
                        confition = {
                            aid: (_c = {},
                                _c[Op.ne] = 99999,
                                _c)
                        };
                    }
                    r = {};
                    return [4 /*yield*/, ArticalModel.findAndCountAll({
                            // 获取所有信息
                            attributes: ['aid', 'artical_name', 'content'],
                            where: confition,
                            limit: 6,
                            offset: (page - 1) * 6,
                            order: [
                                ['aid', 'DESC'],
                            ],
                        }).then(function (result) {
                            r = {
                                status: 1,
                                msg: "success",
                                list: JSON.parse(JSON.stringify(result))
                            };
                        }).catch(function (err) {
                            r = {
                                status: -1000,
                                msg: "error",
                                data: err
                            };
                        })];
                case 1:
                    _d.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
ArticalModel.fetchMine = function (page) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, r;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    r = {};
                    return [4 /*yield*/, ArticalModel.findAndCountAll({
                            // 获取所有信息
                            attributes: ['aid', 'artical_name'],
                            limit: 6,
                            offset: (page - 1) * 6,
                            order: [
                                ['aid', 'DESC'],
                            ],
                            where: {
                                aid: (_a = {},
                                    _a[Op.ne] = 99999,
                                    _a)
                            }
                        }).then(function (result) {
                            r = {
                                status: 1,
                                msg: "success",
                                list: JSON.parse(JSON.stringify(result))
                            };
                        }).catch(function (err) {
                            r = {
                                status: -1000,
                                msg: "error",
                                data: err
                            };
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
ArticalModel.detail = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = {};
                    return [4 /*yield*/, ArticalModel.findAll({
                            attributes: ['aid', 'artical_name', 'content'],
                            // 获取所有信息
                            where: {
                                aid: id
                            },
                        }).then(function (result) {
                            r = {
                                status: 1,
                                msg: "success",
                                list: JSON.parse(JSON.stringify(result))
                            };
                        }).catch(function (err) {
                            r = {
                                status: -1000,
                                msg: "error",
                                data: err
                            };
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
ArticalModel.publish = function (value) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = {};
                    return [4 /*yield*/, ArticalModel.create({
                            // 获取所有信息
                            cid: 1,
                            artical_status: 1,
                            artical_name: value.artical_name,
                            content: value.content,
                            values: value.values,
                        }).then(function (result) {
                            r = {
                                status: 1,
                                msg: "success",
                                data: {
                                    message: "发布成功"
                                } // 正常
                            };
                        }).catch(function (err) {
                            r = {
                                status: -1000,
                                msg: "error",
                                data: err
                            };
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
ArticalModel.list = function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, r;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    r = {};
                    return [4 /*yield*/, ArticalModel.findAll({
                            attributes: ['aid', 'artical_name'],
                            // 获取所有信息
                            limit: 7,
                            order: [
                                ['aid', 'DESC'],
                            ],
                            where: {
                                aid: (_a = {},
                                    _a[Op.ne] = 99999,
                                    _a)
                            }
                        }).then(function (result) {
                            r = {
                                status: 1,
                                msg: "success",
                                list: JSON.parse(JSON.stringify(result))
                            };
                        }).catch(function (err) {
                            r = {
                                status: -1000,
                                msg: "error",
                                data: err
                            };
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
ArticalModel.delete = function (value, token) {
    return __awaiter(this, void 0, void 0, function () {
        var currentUser, uid, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentUser = jwt_1.default.check(token.jwt);
                    uid = currentUser.uid;
                    r = {};
                    return [4 /*yield*/, ArticalModel.destroy({
                            where: {
                                cid: uid,
                                aid: value.aid
                            }
                        }).then(function (result) {
                            r = {
                                status: 1,
                                msg: "success",
                                data: {
                                    message: "删除成功"
                                } // 正常
                            };
                        }).catch(function (err) {
                            r = {
                                status: -1000,
                                msg: "error",
                                data: err
                            };
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, r];
            }
        });
    });
};
exports.default = ArticalModel;
