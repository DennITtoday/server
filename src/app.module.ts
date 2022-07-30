/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { VideoModule } from "./video/video.module";

@Module({


imports:[VideoModule]



})



export class AppModule { }