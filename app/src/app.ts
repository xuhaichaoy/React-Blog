import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";

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
   controllers: [UserController]
});

app.listen(3000);
console.log("启动成功！！！")