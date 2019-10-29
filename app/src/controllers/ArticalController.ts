import { JsonController, Param, Body, Get, Post, Put, Delete, Res, UseBefore, Header, CookieParam } from "routing-controllers";
import urlencodedParser from '../config/bodyparser'
import Artical from '../models/Articals'
import jsonwebtoken from '../config/jwt'
import { callbackify } from "util";

const localhost = "http://localhost:3001"

@JsonController()
@UseBefore(urlencodedParser)

export class ArticalController {

   @Get("/allArticals/:page")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getAll(@Param("page") page: number) {
      // 获取所有文章信息
      const r = await Artical.fetch(page) 
      return {
         data: r
      }
   }

   @Get("/detailArtical/:id")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getOne(@Param("id") id: number) {
      const r = await Artical.detail(id)
      return {
         data: r
      };
   }

   @Post("/publishArtical")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async publishone(@Body() res: any) {
      const r = await Artical.publish(res)
      return {
         data: r
      }
   }

   @Get("/articalList")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getList() {
      // 获取所有文章信息
      const r = await Artical.list() 
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
