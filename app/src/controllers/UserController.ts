import { JsonController, Param, Body, Get, Post, Put, Delete, Res } from "routing-controllers";
import Users from '../models/Users'

@JsonController()
export class UserController {

   @Get("/users")
   async getAll() {
      const r = await Users.fetch() 
      return {
         code: r
      }
   }

   @Post("/loginUser")
   async login(@Body() user: any, @Res() res: any) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
      res.setHeader("Access-Control-Allow-Credentials", "true")
      res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, token")
      res.setHeader("Content-Type", "text/html; charset=utf-8")
      res.cookie('cookieParam', 1111, {
         expires: new Date(Date.now() + 10 * 60 * 1000),
         path: 'http://localhost:3001'
     });
     res.send({
        id: 1
     })
      const r = await Users.login(user)
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