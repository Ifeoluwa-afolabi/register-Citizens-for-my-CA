import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  CitizenRegistrationModule } from
'./citizen-Registration/citizen-Registration.module';

@Module({
imports: [TypeOrmModule.forRoot(),
  CitizenRegistrationModule],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}