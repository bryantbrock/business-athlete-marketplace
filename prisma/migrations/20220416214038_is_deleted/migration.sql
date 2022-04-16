-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Influencer" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
