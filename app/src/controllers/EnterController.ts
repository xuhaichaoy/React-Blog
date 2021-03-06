import { JsonController, Param, Body, Get, Post, Put, Delete, Res, UseBefore, Header, CookieParam } from "routing-controllers";
import urlencodedParser from '../config/bodyparser'
import Novel from '../models/Enter'
import localhost from '../config/localhost'

@JsonController()
@UseBefore(urlencodedParser)

export class EnterController {

   @Get("/allenter")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getAll() {
      // 获取所有文章信息
      const r = await Novel.fetch() 
      return {
         data: {
            status: 1,
            data: r
         }
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