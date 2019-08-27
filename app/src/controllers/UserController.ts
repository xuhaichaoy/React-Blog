import { JsonController, Param, Body, Get, Post, Put, Delete, Res, UseBefore, Header } from "routing-controllers";
import urlencodedParser from '../config/bodyparser'
import Users from '../models/Users'

@JsonController()
@UseBefore(urlencodedParser)

export class UserController {

   @Get("/users")
   async getAll() {
      const r = await Users.fetch() 
      return {
         code: r
      }
   }

   @Post("/loginUser")
   @Header("Access-Control-Allow-Origin", "http://localhost:3001")
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async login(@Body() user: any, @Res() res: any) {
      res.cookie('cookieParam', 22222, {
         domain: 'localhost',
          path: '/', //cookie写入的路径
          maxAge: 1000 * 60 * 60 * 1,
          // expires:new Date('2019-07-06'),
          httpOnly: true,
          overwrite: false
     });
    
      const r = await Users.login(user)
      // res.send({
      //    data: r
      // })
      return {
         data: r
      }
   }

   @Post("/regUser")
   async reg(@Body() user: any) {
      const r = await Users.reg(user)
      return {
         data: r
      }
   }

   @Put("/users/:id")
   put(@Param("id") id: number, @Body() user: any) {
      return "Updating a user...";
   }

   @Delete("/users/:id")
   remove(@Param("id") id: number) {
      return "Removing user...";
   }

}