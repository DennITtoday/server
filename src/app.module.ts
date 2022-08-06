/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { fileModule } from "./file/file.module";
import { VideoModule } from "./video/video.module";

@Module({


imports:[VideoModule,fileModule]



})



export class AppModule { }