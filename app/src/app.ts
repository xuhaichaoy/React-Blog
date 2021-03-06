import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";
import { ArticalController } from "./controllers/ArticalController";
import { EnterController } from "./controllers/EnterController";
import { CommentsController } from "./controllers/CommentsController";
import { TimesController } from "./controllers/TimeController";
import Schedule from "./config/schedule"
import serveStatic from "serve-static"

const app = createExpressServer({
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
   cors: true, // CORS 模块跨域
   controllers: [UserController, ArticalController, EnterController, CommentsController, TimesController]
})

Schedule.startSchedule()
app.use(serveStatic(__dirname))

app.listen(3000);
console.log("启动成功！！！")
