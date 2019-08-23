import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import Artical from '../models/Articals'
@Controller()
export class ArticalController {

   @Get("/allArticals")
   async getAll() {
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