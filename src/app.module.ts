import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'dotenv/config';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://localhost:27017/mydb`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
