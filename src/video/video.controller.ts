/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { CreateVideoDto } from "./dto/create-video.dto";
import { VideoService } from "./video.service";

@Controller('/videos')
export class VideoController {

    constructor(private videoService: VideoService) {

    }
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'video', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateVideoDto,) {
        const {picture, video} = files
        return this.videoService.create(dto, picture[0], video[0]);

    }
    @Get()
    getAll() {
        return this.videoService.getAll()
    }
    @Get(':videoID')
    getOne(@Param('videoID') videoID: string) {
        return this.videoService.getOne(videoID)


    }
    @Delete(':videoID')
    delete(@Param('videoID') videoID: string) {

        return this.videoService.delete(videoID);

    }
}