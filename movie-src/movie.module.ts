import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './models/movie.model';
import {AppService} from "../src/app.service";
import {MovieController} from "../src/movie.controller";

@Module({
    imports: [SequelizeModule.forFeature([Movie])],
    providers: [AppService],
    controllers: [MovieController],
})
export class MovieModule {}
