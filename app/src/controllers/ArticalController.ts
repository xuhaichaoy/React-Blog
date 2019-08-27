import { JsonController, Param, Body, Get, Post, Put, Delete, Res, UseBefore, Header } from "routing-controllers";
import urlencodedParser from '../config/bodyparser'
import Artical from '../models/Articals'
@JsonController()
@UseBefore(urlencodedParser)

export class ArticalController {

   @Get("/allArticals")
   @Header("Access-Control-Allow-Origin", "http://localhost:3001")
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getAll(@Res() res: any) {
      res.cookie('cookieParam', 1111, {
         domain: 'localhost',
         path: '/', //cookie写入的路径
         maxAge: 1000 * 60 * 60 * 1,
         // expires:new Date('2019-07-06'),
         httpOnly: true,
         overwrite: false
     });
      // 获取所有文章信息
      const r = await Artical.fetch() 
      return {
         data: r
      }
   }

   @Get("/users/:id")
   getOne(@Param("id") id: number) {
      
      return {
         user: id
      };
   }

   @Post("/users")
   post(@Body() user: any) {
      return "Saving user...";
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