import { Global, Module } from '@nestjs/common';
import { FileModule } from 'src/file/file.module';
import { PrismaService } from './prisma.service';

@Global()
@Module({
    providers: [PrismaService, FileModule],
    exports: [PrismaService],
})
export class PrismaModule { }