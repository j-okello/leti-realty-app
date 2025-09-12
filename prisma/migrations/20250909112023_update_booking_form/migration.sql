/*
  Warnings:

  - Changed the type of `agreeToPolicy` on the `BookingForm` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."BookingForm" DROP COLUMN "agreeToPolicy",
ADD COLUMN     "agreeToPolicy" BOOLEAN NOT NULL;
