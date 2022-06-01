import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// const MONGO = {
//   username: 'klam',
//   password: encodeURIComponent('klamdevenv'),
//   getUrl: function () {
//     return `mongodb://localhost:${this.username}:${this.password}}@shorter`;
//   },
// };

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
