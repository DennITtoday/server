/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Prisma, Video } from "@prisma/client";
import { FileService, fileType } from "src/file/file.service";
import { PrismaService } from "src/prisma.service";
import { CreateVideoDto } from "./dto/create-video.dto";

type GetVideosParams = {
    skip?: number;
    take?: number;
    cursor?: Prisma.VideoWhereUniqueInput;
    where?: Prisma.VideoWhereInput;
    orderBy?: Prisma.VideoOrderByWithRelationInput;
};
@Injectable()

export class VideoService {

    constructor(private prismaService: PrismaService, private fileService: FileService) { }


    async create(dto: CreateVideoDto, body: { description: string, videoName: string }) {
        const { picture, video } = dto;
        const picturePath = this.fileService.createFile(fileType.IMAGE, picture[0]);
        const videoPath = this.fileService.createFile(fileType.VIDEO, video[0]);
        const video_record = this.prismaService.video.create
            ({
                data: {
                    videoName: body.videoName,
                    description: body.description,
                    picture: picturePath.fileName,
                    video: videoPath.fileName
                }
            });
        return video_record;

    }

    async getAll(count = 10, offset = 0): Promise<Video[]> {
        const video = await this.prismaService.video.findMany({ skip: Number(offset), take: Number(count) })
        return video;
    }

    async getOne(videoName: string) {
        return this.prismaService.video.findFirst({ where: { video: { contains: videoName } } })


    }


    async delete(videoName: string) {
        return this.prismaService.video.delete({ where: { video: videoName } })


    }
    async search(scan: GetVideosParams): Promise<Video[]> {
        const videos = await this.prismaService.video.findMany(scan)
        return videos;
    }

}