import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore, Header, CookieParams, QueryParam } from "routing-controllers";
import urlencodedParser from '../config/bodyparser'
import Time from '../models/Time'
import jsonwebtoken from '../config/jwt'
import { callbackify } from "util";
import localhost from '../config/localhost'

@JsonController()
@UseBefore(urlencodedParser)

export class TimesController {

   @Get("/getTime")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getTime() {
      // 获取所有文章信息res
      const r = await Time.fetch() 
      return {
         data: r
      }
   }
   
   @Post("/sendComment")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async sendComment(@Body() res: any, @CookieParams() params: any) {
      const r = await Time.sendComment(res, params)
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
