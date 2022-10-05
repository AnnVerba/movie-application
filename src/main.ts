import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
dotenv.config({path: './.env/.env'})
import cors from 'cors'


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
app.enableCors();
  await app.listen(process.env.apiPort);

}
bootstrap();
