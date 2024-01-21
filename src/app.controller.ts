import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/create")
  createData(@Body() body: { id: number }): string {
    return this.appService.makeData(body.id);
  }

  @Get("/:id")
  getData(@Param("id") id: number): string {
    return this.appService.getData(id);
  }
}
