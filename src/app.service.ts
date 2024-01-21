import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  makeData(id: number): string {
    throw new Error("Method not implemented.");
  }
  getHello(): string {
    return "Hello World!";
  }

  getData(id: number): string {
    return `Got object with ${id}`;
  }
}
