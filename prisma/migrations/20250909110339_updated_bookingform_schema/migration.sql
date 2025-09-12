/*
  Warnings:

  - Added the required column `agreeToPolicy` to the `BookingForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."BookingForm" ADD COLUMN     "agreeToPolicy" TEXT NOT NULL;
