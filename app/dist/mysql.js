"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("./config/mysql"));
var dateBase = {
    ArticalModel: mysql_1.default.sequelize.define('artical', {
        aid: {
            type: mysql_1.default.Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        cid: mysql_1.default.Sequelize.BIGINT,
        artical_name: mysql_1.default.Sequelize.STRING(100),
        artical_status: mysql_1.default.Sequelize.BIGINT,
        tag_id: mysql_1.default.Sequelize.STRING(100),
        category_id: mysql_1.default.Sequelize.STRING(100),
        viewCount: mysql_1.default.Sequelize.STRING(100),
        content: mysql_1.default.Sequelize.TEXT,
        values: mysql_1.default.Sequelize.TEXT,
        Date: mysql_1.default.Sequelize.BIGINT,
        comments_id: mysql_1.default.Sequelize.BIGINT //评论内容
    }, {
        timestamps: false
    }),
    CommentModel: mysql_1.default.sequelize.define('comments', {
        cid: {
            type: mysql_1.default.Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        uid: {
            type: mysql_1.default.Sequelize.BIGINT,
            allowNull: false
        },
        aid: {
            type: mysql_1.default.Sequelize.BIGINT,
            allowNull: false
        },
        Date: mysql_1.default.Sequelize.STRING(30),
        comments: mysql_1.default.Sequelize.TEXT //评论内容
    }, {
        timestamps: false
    }),
    EnterArtical: mysql_1.default.sequelize.define('enterartical', {
        aid: {
            type: mysql_1.default.Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        artical_name: mysql_1.default.Sequelize.STRING(100),
        artical_achour: mysql_1.default.Sequelize.STRING(100),
        artical_href: mysql_1.default.Sequelize.STRING(100),
    }, {
        timestamps: false
    }),
    UserModel: mysql_1.default.sequelize.define('user', {
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
    })
};
dateBase.ArticalModel.sync();
dateBase.CommentModel.sync();
dateBase.UserModel.sync();
exports.default = dateBase;
