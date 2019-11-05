import { JsonController, Param, Body, Get, Post, Put, Delete, Res, UseBefore, Header, CookieParams } from "routing-controllers";
import urlencodedParser from '../config/bodyparser'
import Users from '../models/Users'
import localhost from '../config/localhost'
@JsonController()
@UseBefore(urlencodedParser)

export class UserController {

   @Get("/myself")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getmine() {
      const r = await Users.fetch()
      return {
         data: r
      }
   }

   @Post("/loginUser")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async login(@Body() user: any, @Res() res: any) {
      const r = await Users.login(user)
      res.cookie('jwt', r.token, {
         domain: 'localhost',
         path: '/', //cookie写入的路径
         maxAge: 1000 * 60 * 60 * 1,
         // expires:new Date('2019-07-06'),
         httpOnly: true,
         overwrite: false
      });

      return {
         data: r.data
      }
   }

   @Post("/regUser")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async reg(@Body() user: any) {
      const r = await Users.reg(user)
      return {
         data: r
      }
   }

   @Get("/getCurrentUser")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getCurrentUser(@CookieParams() params: any) {
      const r = await Users.getCurrentUser(params)
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