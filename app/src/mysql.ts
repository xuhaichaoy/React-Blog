import obj from './config/mysql'

const dateBase = {
    ArticalModel: obj.sequelize.define('artical', {
        aid: {
            type: obj.Sequelize.INTEGER(11),
            primaryKey: true,            // 主键
            autoIncrement: true,         // 自动递增
            // 文章ID
        },
        cid: obj.Sequelize.BIGINT, // 作者ID
        artical_name: obj.Sequelize.STRING(100), // 文章名
        artical_status: obj.Sequelize.BIGINT, // 文章状态
        tag_id: obj.Sequelize.STRING(100), // 标签ID
        category_id: obj.Sequelize.STRING(100), // 分类ID
        viewCount: obj.Sequelize.STRING(100), // 阅读数量
        content: obj.Sequelize.TEXT, // 文章内容
        values: obj.Sequelize.TEXT,
        Date: obj.Sequelize.BIGINT, // 日期
        comments_id: obj.Sequelize.BIGINT //评论内容
    }, {
        timestamps: false
    }),
    CommentModel: obj.sequelize.define('comments', {
        cid: {
            type: obj.Sequelize.INTEGER(11),
            primaryKey: true,            // 主键
            autoIncrement: true,         // 自动递增
            // 文章ID  gindex
        },
        uid: {
            type: obj.Sequelize.BIGINT,
            allowNull: false
        }, //用户ID
        aid: {
            type: obj.Sequelize.BIGINT,
            allowNull: false
        }, // 评论ID
        Date: obj.Sequelize.STRING(30), // 日期
        comments: obj.Sequelize.TEXT //评论内容
    }, {
        timestamps: false
    }),
    EnterArtical: obj.sequelize.define('enterartical', {
        aid: {
            type: obj.Sequelize.INTEGER(11),
            primaryKey: true,            // 主键
            autoIncrement: true,         // 自动递增
            // 文章ID
        },
        artical_name: obj.Sequelize.STRING(100),
        artical_achour: obj.Sequelize.STRING(100),
        artical_href: obj.Sequelize.STRING(100),
    }, {
        timestamps: false
    }),
    UserModel: obj.sequelize.define('user', {
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
    }),
    TimeModel: obj.sequelize.define('time', {
        tid: {
            type: obj.Sequelize.INTEGER(11),
            primaryKey: true,            // 主键
            autoIncrement: true,         // 自动递增
            // 时间轴ID  gindex
        },
        special: obj.Sequelize.INTEGER(2),
        status: obj.Sequelize.STRING(10), // 时间点状态  red green grey
        Date: obj.Sequelize.STRING(30), // 日期
        content: obj.Sequelize.TEXT //评论内容
    }, {
        timestamps: false
    }),


}
dateBase.ArticalModel.sync();
dateBase.CommentModel.sync();
dateBase.UserModel.sync();
dateBase.TimeModel.sync();

export default dateBase