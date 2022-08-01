/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { FileModule } from "src/file/file.module";
import { FileService } from "src/file/file.service";
import { PrismaService } from "src/prisma.service";
import { VideoController } from "./video.controller";
import { VideoService } from "./video.service";

@Module({

    controllers: [VideoController],
    providers:[VideoService,PrismaService,FileService],

})
export class VideoModule { }