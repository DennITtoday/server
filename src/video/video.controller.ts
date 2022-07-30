/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";

@Controller('/videos')
export class VideoController {

    create() {


    }
    @Get()
    getAll() {

        return 'ЧЛЕН_БОЛЬШОЙ'

    }

    getOne() {



    }

    delete() {



    }
}