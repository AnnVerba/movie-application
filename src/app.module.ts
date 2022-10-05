import { Module } from '@nestjs/common';
import { MovieController } from './movie/movie.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movie/models/movie.model';
import * as dotenv from 'dotenv'
import {MovieModule} from "./movie/movie.module";
dotenv.config({path: './.env/.env'})

@Module({
  imports: [ SequelizeModule.forRoot({
    database: process.env.database,
    username: process.env.owner,
    password: process.env.password,
    host: 'localhost',
    dialect: "postgres",
    protocol: 'postgres',
    models: [Movie],
    sync:{force:true,
      alter:true
    }

  }), MovieModule],


})
export class AppModule {}
