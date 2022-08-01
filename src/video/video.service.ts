/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Video } from "@prisma/client";
import { FileService, FileType } from "src/file/file.service";
import { PrismaService } from "src/prisma.service";
import { CreateVideoDto } from "./dto/create-video.dto";


@Injectable()

export class VideoService {

    constructor(private prismaService: PrismaService, private fileService: FileService) { }


    async create(createVideoDto: CreateVideoDto, picture, video): Promise<Video> {
        const videoPath = this.fileService.createFile(FileType.VIDEO, video);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const Video = await this.prismaService.video.create({data:createVideoDto})
        return Video;
    }

    async getAll(): Promise<Video[]> {
        return this.prismaService.video.findMany()


    }

    async getOne(videoID: string) {
        return this.prismaService.video.findUnique({ where: { videoID } })


    }


    async delete(videoID: string) {
        return this.prismaService.video.delete({ where: { videoID } })


    }


}
