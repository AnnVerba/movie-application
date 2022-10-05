import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './models/movie.model';
import {AppService} from "../app.service";
import {MovieController} from "./movie.controller";

@Module({
    imports: [SequelizeModule.forFeature([Movie])],
    providers: [AppService],
    controllers: [MovieController],
})
export class MovieModule {}
