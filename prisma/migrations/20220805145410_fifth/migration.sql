/*
  Warnings:

  - You are about to drop the column `Description` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `video` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_videoVideoID_fkey";

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "Description",
DROP COLUMN "url",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "picture" TEXT,
ADD COLUMN     "video" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";
