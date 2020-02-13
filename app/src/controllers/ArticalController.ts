import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore, Header, CookieParam, QueryParam, CookieParams } from "routing-controllers";
import urlencodedParser from '../config/bodyparser'
import Artical from '../models/Articals'
import jsonwebtoken from '../config/jwt'
import { callbackify } from "util";
import localhost from '../config/localhost'

@JsonController()
@UseBefore(urlencodedParser)

export class ArticalController {

   @Get("/allArticals")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getAll(@QueryParam("page") page: number, @QueryParam("search") search: any) {
      // 获取所有文章信息
      console.log(search)
      const r = await Artical.fetch(page, search) 
      return {
         data: r
      }
   }

   @Get("/allUserArticals")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getUser(@QueryParam("page") page: number) {
      // 获取所有文章信息
      const r = await Artical.fetchMine(page) 
      return {
         data: r
      }
   }

   @Get("/detailArtical")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async getOne(@QueryParam("articalId") articalId: number) {
      const r = await Artical.detail(articalId)
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

   @Post("/delete")
   @Header("Access-Control-Allow-Origin", localhost)
   @Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
   @Header("Access-Control-Allow-Credentials", "true")
   @Header("Access-Control-Allow-Headers", "X-Requested-With, token")
   @Header("Content-Type", "text/html; charset=utf-8")
   async delete(@Body() res: any, @CookieParams() params: any) {
      const r = await Artical.delete(res, params)
      return {
         data: r
      }
   }
   @Delete("/users/:id")
   remove(@Param("id") id: number) {
      return "Removing user...";
   }

}
