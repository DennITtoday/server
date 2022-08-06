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
        { name: 'Video', maxCount: 1 },
    ]))
    create(@UploadedFiles() files: { picture: Express.Multer.File[], Video: Express.Multer.File[] }, @Body() dto: CreateVideoDto) {
        const { picture, Video } = files
        return this.videoService.create(dto, picture[0], Video[0]);

    }
    @Get('/search/:searchString')
    async getFilteredVideos(
        @Param('searchString') searchString: string,
    ): Promise<VideoModel[]> {
        return this.videoService.search({
            where: {
                OR: [
                    {
                        videoName: { contains: searchString },
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
    @Get(':videoID')
    getOne(@Param('videoID') videoID: string) {
        return this.videoService.getOne(videoID)


    }
    @Delete(':videoID')
    delete(@Param('videoID') videoID: string) {

        return this.videoService.delete(videoID);

    }
}