-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_userUserID_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "videoVideoID" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_videoVideoID_fkey" FOREIGN KEY ("videoVideoID") REFERENCES "Video"("videoID") ON DELETE SET NULL ON UPDATE CASCADE;
