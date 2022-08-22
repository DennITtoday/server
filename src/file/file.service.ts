import { HttpException, HttpStatus, Injectable, } from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'
export enum fileType {
    VIDEO = "video",
    IMAGE = "image"
}
@Injectable()
export class FileService {



    createFile(type: fileType, file: any): { filePath: string, fileName: string } {
        try {
            const fileExtension = file.originalname.split('.').pop()
            const fileName = uuid.v4() + '.' + fileExtension
            const filePlace = path.resolve(__dirname, '../..', 'uploads')
            const filePath = path.resolve(filePlace, fileName)
            if (!fs.existsSync(filePlace)) {
                fs.mkdirSync(filePlace, { recursive: true })
            }
            fs.writeFileSync(filePath, file.buffer)
            return { filePath, fileName }
        } catch (e) {

            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }


    }

}
