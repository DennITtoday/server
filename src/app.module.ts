/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { resolve } from "path";
import { fileModule } from "./file/file.module";
import { VideoModule } from "./video/video.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'
@Module({


    imports: [VideoModule, fileModule, ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname, 'static'),
    }),]



})



export class AppModule { }