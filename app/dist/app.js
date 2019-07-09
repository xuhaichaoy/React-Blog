"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
var routing_controllers_1 = require("routing-controllers");
var UserController_1 = require("./controllers/UserController");
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
    controllers: [UserController_1.UserController]
});
app.listen(3000);
console.log("启动成功！！！");
//# sourceMappingURL=app.js.map