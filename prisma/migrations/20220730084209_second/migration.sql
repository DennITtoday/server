-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "userUserID" INTEGER;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES "User"("userID") ON DELETE SET NULL ON UPDATE CASCADE;
