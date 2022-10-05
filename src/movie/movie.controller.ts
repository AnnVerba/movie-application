import {Controller, Get, Post, Body, Put, Res, Param, Delete, HttpStatus, Inject} from '@nestjs/common';
import { AppService } from '../app.service';
import { Response } from 'express';

import {Movie} from "./models/movie.model";

@Controller('movie')
export class MovieController {

  constructor(

      private readonly appService:  AppService,

  ) {}

  @Post()
    async createMovie(@Body() body: any , @Res()res: Response): Promise<Movie> {
      if (!body) {
          console.log(body.name)
          console.log(body)
          res.status(HttpStatus.BAD_REQUEST).send("no movie")
          return null
      }
    try {
const movie=await this.appService.createRow(body)
        res.status(HttpStatus.OK).json([movie])
        return movie

    } catch (e) {
        res.status(HttpStatus.BAD_REQUEST).json([])

    }

  };


  @Put(':id')
 async updateMovie(@Body() body: any,  @Param('id') id: number, @Res()res: Response)  {



    try {
      const movie =  await this.appService.upDateRow(body, id)

      return  res.status(HttpStatus.OK).send(movie);

    } catch (err) {
      return   res.status(HttpStatus.BAD_REQUEST).json([err])

    }

  }

  @Delete(':id')
    async deleteMovie( @Res() res: Response,  @Param('id')id:number) : Promise<any>{
    try{
      return await this.appService.deleteMovie(id)
     //  res.status(HttpStatus.OK).json([movie]);
     // return

    } catch (err) {
       res.status(HttpStatus.BAD_REQUEST).json([err])

    }

  };


  @Get(':id')
    async getMovieById (@Res() res: Response,  @Param('id')id: number):Promise<Movie> {

    try {
      return await this.appService.getMovieById(id);

    }
    catch (err) {
      res.status(HttpStatus.BAD_REQUEST).json([err])
    }

  }

  @Get()
   async getMovies(@Res() res: Response):Promise<Movie[]> {
    try {
        const movies= await this.appService.getAllMovies()
       res.status(HttpStatus.OK).send(movies)

return movies


    } catch (e) {
       res.status(HttpStatus.BAD_REQUEST).json([e])
    }

  }
@Get("get")
   get(){
    return 'Hello '

}
}
