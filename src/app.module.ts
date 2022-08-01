/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { FileModule } from "./file/file.module";
import { VideoModule } from "./video/video.module";

@Module({


imports:[VideoModule, FileModule]



})



export class AppModule { }