/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Prisma, Video } from "@prisma/client";
import { find } from "rxjs";
import { FileService, fileType } from "src/file/file.service";
import { PrismaService } from "src/prisma.service";
import { isRegExp } from "util/types";
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


    async create(createVideoDto: CreateVideoDto, picture, Video): Promise<Video> {
        const picturePath = this.fileService.createFile(fileType.IMAGE, picture);
        const videoPath = this.fileService.createFile(fileType.VIDEO, Video);
        const { videoName, description } = createVideoDto
        const video = await this.prismaService.video.create({ data: { videoName, video: videoPath, description, picture: picturePath } })
        return video;

    }

    async getAll(count = 10, offset = 0): Promise<Video[]> {
        const video = await this.prismaService.video.findMany({ skip: Number(offset), take: Number(count) })
        return video;
    }

    async getOne(videoID: string) {
        return this.prismaService.video.findUnique({ where: { videoID } })


    }


    async delete(videoID: string) {
        return this.prismaService.video.delete({ where: { videoID } })


    }
    async search(scan: GetVideosParams): Promise<Video[]> {
        const videos = await this.prismaService.video.findMany(scan)
        return videos;
    }

}
