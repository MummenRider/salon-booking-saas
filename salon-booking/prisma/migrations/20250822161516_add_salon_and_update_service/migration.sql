/*
  Warnings:

  - You are about to drop the column `serviceName` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `serviceTypeId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the `ServiceType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `duration` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salonId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Service" DROP CONSTRAINT "Service_serviceTypeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Service" DROP CONSTRAINT "Service_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Service" DROP COLUMN "serviceName",
DROP COLUMN "serviceTypeId",
DROP COLUMN "userId",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "salonId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."ServiceType";

-- CreateTable
CREATE TABLE "public"."Salon" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "contactNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Salon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Salon" ADD CONSTRAINT "Salon_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_salonId_fkey" FOREIGN KEY ("salonId") REFERENCES "public"."Salon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
