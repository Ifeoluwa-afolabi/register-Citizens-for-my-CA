import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('home.html')
  getHome(): {} {
    return this.appService.getHome();
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  @Render('index.html')
  getHello2(): {} {
    return this.appService.getHello2();
  }

  @Get('about-us')
  @Render('about-us.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }

  @Get('service')
  @Render('service.html')
  getService(): {} {
    return this.appService.getService();
  }

  @Get('contact-us')
  @Render('contact-us.html')
  getContactUs(): {} {
    return this.appService.getService();
  }

  
}
