import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class UserController {

   @Get("/users")
   getAll() {
      return [
         { id: 1, name: "First user!" },
         { id: 2, name: "Second user!" }
      ];
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