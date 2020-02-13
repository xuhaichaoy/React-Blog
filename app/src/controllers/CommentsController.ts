import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore, Header, CookieParams, QueryParam } from "routing-controllers";
import urlencodedParser from '../config/bodyparser'
import Comments from '../models/Comments'
import jsonwebtoken from '../config/jwt'
import { callbackify } from "util";
import localhost from '../config/localhost'

@JsonController()
@UseBefore(urlencodedParser)

export class CommentsController {

   @Get("/detailComment")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async detailComment(@QueryParam("articalId") articalId: number) {
      // 获取所有文章信息res
      const r = await Comments.fetch(articalId) 
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
      const r = await Comments.sendComment(res, params)
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
