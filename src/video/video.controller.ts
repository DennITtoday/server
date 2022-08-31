/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { scan } from "rxjs";
import { CreateVideoDto } from "./dto/create-video.dto";
import { VideoService } from "./video.service";
import { Video as VideoModel } from '@prisma/client';

@Controller('/videos')
export class VideoController {

    constructor(private videoService: VideoService) {

    }
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'video', maxCount: 1 },
    ]))
    create(@UploadedFiles() dto: CreateVideoDto, @Body() body: { description: string, videoName: string }) {

        return this.videoService.create(dto, body);

    }
    @Get('/search/:searchString')
    async getFilteredVideos(
        @Param('searchString') searchString: string,
    ): Promise<VideoModel[]> {
        return this.videoService.search({
            where: {
                OR: [
                    {
                        video: { contains: searchString },
                    },
                ],
            },
        });
    }

    @Get()
    search(@Query('count') count: number,
        @Query('offset') offset: number) {
        return this.videoService.getAll(count, offset)
    }
    @Get(':video')
    getOne(@Param('video') video: string) {
        return this.videoService.getOne(video)


    }
    @Delete(':videoName')
    delete(@Param('videoName') videoName: string) {

        return this.videoService.delete(videoName);

    }
}