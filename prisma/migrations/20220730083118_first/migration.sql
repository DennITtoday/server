-- CreateTable
CREATE TABLE "User" (
    "userID" SERIAL NOT NULL,
    "nickName" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Video" (
    "videoID" SERIAL NOT NULL,
    "videoName" TEXT NOT NULL,
    "Description" TEXT,
    "url" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("videoID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nickName_key" ON "User"("nickName");

-- CreateIndex
CREATE UNIQUE INDEX "Video_videoName_key" ON "Video"("videoName");
