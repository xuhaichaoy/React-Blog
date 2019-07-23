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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("../config/mysql"));
var UserModel = mysql_1.default.sequelize.define('user', {
    // id: { type: obj.Sequelize.INTEGER, autoIncrement: true, primaryKeys: true, unique: true },
    // username: { type: obj.Sequelize.STRING, allowNull: false },
    // password: { type: obj.Sequelize.STRING, allowNull: false },
    uid: {
        type: mysql_1.default.Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
    },
    nickName: mysql_1.default.Sequelize.STRING(100),
    userName: mysql_1.default.Sequelize.STRING(100),
    passWord: mysql_1.default.Sequelize.STRING(100),
    Info: mysql_1.default.Sequelize.STRING(100),
    Github: mysql_1.default.Sequelize.STRING(100),
    image: mysql_1.default.Sequelize.STRING(100),
    Date: mysql_1.default.Sequelize.BIGINT,
    admin: mysql_1.default.Sequelize.BIGINT,
}, {
    timestamps: false
})(function () { return __awaiter(_this, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, UserModel.create({
                    uid: 1,
                    nickName: 'chao',
                    userName: 'haichao',
                    passWord: '1234'
                }).then(function (result) {
                    console.log("ok");
                }).catch(function (err) {
                    console.log("no");
                })];
            case 1:
                user = _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
// UserModel.sync()
// .on('success', function () {
//     console.log('aa..');
// }).on('failure', function () {
//     console.log('bb..');
// });
exports.default = UserModel;
//# sourceMappingURL=Users.js.map