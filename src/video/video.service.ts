/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Video } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { CreateVideoDto } from "./dto/create-video.dto";


@Injectable()

export class VideoService {

    constructor(private prismaService: PrismaService) { }


    async create(createVideoDto: CreateVideoDto,): Promise<Video> {
        return this.prismaService.video.create({ data: createVideoDto })
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