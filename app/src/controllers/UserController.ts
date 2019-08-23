import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import Users from '../models/Users'
@Controller()
export class UserController {

   @Get("/users")
   async getAll() {
      const r = await Users.fetch() 
      return {
         code: r
      }
   }

   @Get("/users/:id")
   getOne(@Param("id") id: number) {
      
      return {
         user: id
      };
   }

   @Post("/regUser")
   post(@Param("email") email: any) {
      console.log(email)
      return {
         data: email
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