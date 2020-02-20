"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("./controllers/UserController");
var ArticalController_1 = require("./controllers/ArticalController");
var EnterController_1 = require("./controllers/EnterController");
var CommentsController_1 = require("./controllers/CommentsController");
var TimeController_1 = require("./controllers/TimeController");
var schedule_1 = __importDefault(require("./config/schedule"));
var serve_static_1 = __importDefault(require("serve-static"));
var app = routing_controllers_1.createExpressServer({
    defaults: {
        //with this option, null will return 404 by default
        nullResultCode: 404,
        //with this option, void or Promise<void> will return 204 by default 
        undefinedResultCode: 204,
        paramOptions: {
            //with this option, argument will be required by default
            required: true
        }
    },
    cors: true,
    controllers: [UserController_1.UserController, ArticalController_1.ArticalController, EnterController_1.EnterController, CommentsController_1.CommentsController, TimeController_1.TimesController]
});
schedule_1.default.startSchedule();
app.use(serve_static_1.default(__dirname));
app.listen(3000);
console.log("启动成功！！！");
