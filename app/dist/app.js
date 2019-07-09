"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("./controllers/UserController");
// creates express app, registers all controller routes and returns you express app instance
var app = routing_controllers_1.createExpressServer({
    controllers: [UserController_1.UserController] // we specify controllers we want to use
});
// import Koa from "koa"
// const app = new Koa()
app.listen(3000);
console.log("启动成功！！！");
//# sourceMappingURL=app.js.map