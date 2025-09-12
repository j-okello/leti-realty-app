/*
Warnings:

- You are about to drop the column `agreeToPolicy` on the `BookingForm` table. All the data in the column will be lost.
- You are about to drop the column `theDate` on the `BookingForm` table. All the data in the column will be lost.
- You are about to drop the column `theTime` on the `BookingForm` table. All the data in the column will be lost.
- Added the required column `bookingDate` to the `BookingForm` table without a default value. This is not possible if the table is not empty.
- Added the required column `bookingTime` to the `BookingForm` table without a default value. This is not possible if the table is not empty.
- Added the required column `email` to the `BookingForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."BookingForm"
DROP COLUMN "agreeToPolicy",
DROP COLUMN "theDate",
DROP COLUMN "theTime",
ADD COLUMN "bookingDate" TEXT NOT NULL,
ADD COLUMN "bookingTime" TEXT NOT NULL,
ADD COLUMN "email" TEXT NOT NULL;