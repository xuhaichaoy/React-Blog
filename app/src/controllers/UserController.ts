import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
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
   async login(@Body() user: any) {
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