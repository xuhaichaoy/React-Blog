import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controllers/UserController";

const app = createExpressServer({
   controllers: [UserController] 
});

app.listen(3000);
console.log("启动成功！！！")