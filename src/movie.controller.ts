import {Controller, Get, Post, Body, Put, Res, Param, Delete, HttpStatus, Inject} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

import {Movie} from "../movie-src/models/movie.model";

@Controller()
export class MovieController {

  constructor(

      private readonly appService:  AppService,

  ) {}

  @Post()
    createMovie(@Body() body: any , @Res()res: Response): Promise<Movie> {
      if (!body||!body.name||!body.time) {
          res.status(HttpStatus.BAD_REQUEST)
          return null
      }
    try {

        return this.appService.createRow(body)

    } catch (e) {
        res.status(HttpStatus.BAD_REQUEST).json([])

    }

  };


  @Put(':id')
  updateMovie(@Body() body: any,  @Param('id') id: number, @Res()res: Response)  {



    try {
      const movie =  this.appService.upDateRow(body, id)

      return  res.status(HttpStatus.OK).send(movie);

    } catch (err) {
      return   res.status(HttpStatus.BAD_REQUEST).json([err])

    }

  }

  @Delete(':id')
    deleteMovie( @Res() res: Response,  @Param('id')id:number) : Promise<any>{
    try{
      return this.appService.deleteMovie(id)
     //  res.status(HttpStatus.OK).json([movie]);
     // return

    } catch (err) {
       res.status(HttpStatus.BAD_REQUEST).json([err])

    }


  };


  @Get(':id')
    getMovieById (@Res() res: Response,  @Param('id')id: number):Promise<Movie> {

    try {
      return this.appService.getMovieById(id);

    }
    catch (err) {
      res.status(HttpStatus.BAD_REQUEST).json([err])
    }

  }

  @Get('movies')
   getMovies(@Res() res: Response):Promise<Movie[]> {
    try {
      return this.appService.getAllMovies()



    } catch (e) {
       res.status(HttpStatus.BAD_REQUEST).json([e])
    }

  }
@Get("get")
   get(){
    return 'Hello '

}
}
