/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateVideoDto } from "./dto/create-video.dto";
import { VideoService } from "./video.service";

@Controller('/videos')
export class VideoController {

    constructor(private videoService: VideoService) {

    }
    @Post()
    create(@Body() dto: CreateVideoDto) {
        return this.videoService.create(dto);

    }
    @Get()
    getAll() {
        return this.videoService.getAll()
    }
    @Get(':videoID')
    getOne(@Param('videoID') videoID: string) {
        return this.videoService.getOne(videoID)


    }
    @Delete('videoID')
    delete(@Param('videoID') videoID: string) {

        return this.videoService.delete(videoID);

    }
}