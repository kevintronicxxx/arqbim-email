import { Body, Controller, Get, Post } from '@nestjs/common';
import { Email } from 'entities/email.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // sendMail(): any {
  //   return this.appService.example();
  // }

  @Post('email')
  sendTemplate(@Body()email:Email): any {
    return this.appService.example2(email);
  }
}
