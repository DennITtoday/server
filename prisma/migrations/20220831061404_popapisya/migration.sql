/*
  Warnings:

  - A unique constraint covering the columns `[video]` on the table `Video` will be added. If there are existing duplicate values, this will fail.
  - Made the column `video` on table `Video` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Video_videoName_key";

-- AlterTable
ALTER TABLE "Video" ALTER COLUMN "video" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Video_video_key" ON "Video"("video");
