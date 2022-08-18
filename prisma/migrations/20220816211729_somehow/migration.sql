-- CreateTable
CREATE TABLE "Video" (
    "videoName" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "picture" TEXT,
    "video" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Video_videoName_key" ON "Video"("videoName");
