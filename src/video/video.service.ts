/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Video } from "@prisma/client";
import { FileService, fileType } from "src/file/file.service";
import { PrismaService } from "src/prisma.service";
import { CreateVideoDto } from "./dto/create-video.dto";


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
