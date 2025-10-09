-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('RENT', 'SALE');

-- CreateEnum
CREATE TYPE "public"."ReasonForSelling" AS ENUM ('INVESTMENT_SALE', 'UPGRADING', 'RELOCATION', 'DOWNSIZING', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."Timeline" AS ENUM ('ASAP', '1-3 months', '3-6 months', 'FLEXIBLE');

-- CreateEnum
CREATE TYPE "public"."PropertyType" AS ENUM ('APARTMENT', 'BUNGALOW', 'MAISONETTE', 'STUDIO_APARTMENT', 'SERVICED_APARTMENT', 'PENTHOUSE', 'TOWNHOUSE', 'VILLA', 'MANSION', 'DUPLEX', 'SINGLE_FAMILY_HOME', 'MULTI_FAMILY_HOME', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('ADMIN');

-- CreateTable
CREATE TABLE "public"."ContactForm" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "agreeToPolicy" BOOLEAN NOT NULL,
    "phoneId" TEXT,

    CONSTRAINT "ContactForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PhoneNumber" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "phoneCode" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "fullNumber" TEXT NOT NULL,

    CONSTRAINT "PhoneNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PropertySaleRequest" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "propertyAddress" TEXT NOT NULL,
    "propertyType" "public"."PropertyType" NOT NULL,
    "other" TEXT,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "squareFootage" INTEGER NOT NULL,
    "reasonForSelling" "public"."ReasonForSelling" NOT NULL,
    "timeline" "public"."Timeline" NOT NULL,
    "additionalInfo" TEXT,
    "agreeToPolicy" BOOLEAN NOT NULL,
    "phoneId" TEXT NOT NULL,

    CONSTRAINT "PropertySaleRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SaleRequestFormPhone" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "phoneCode" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "fullNumber" TEXT NOT NULL,

    CONSTRAINT "SaleRequestFormPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookingForm" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "property" TEXT NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL,
    "bookingTime" TIMESTAMP(3) NOT NULL,
    "agreeToPolicy" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "phoneId" TEXT,

    CONSTRAINT "BookingForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookingFormPhone" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "phoneCode" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "fullNumber" TEXT NOT NULL,

    CONSTRAINT "BookingFormPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."properties" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "location" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "category" "public"."Category" NOT NULL,
    "property_type" "public"."PropertyType" NOT NULL,
    "parkingspace" INTEGER NOT NULL,
    "petsallowed" BOOLEAN NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "isnew" BOOLEAN NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "hasvideo" BOOLEAN NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "publisheddate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminUserId" TEXT NOT NULL,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."property_images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "isMain" BOOLEAN NOT NULL DEFAULT false,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "property_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."amenities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."not_included_items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "not_included_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."visitors" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upDatedAt" TIMESTAMP(3) NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "visitors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "name" TEXT NOT NULL,
    "passwordHash" TEXT,
    "role" "public"."UserRole" NOT NULL DEFAULT 'ADMIN',
    "twoFactorCode" TEXT,
    "twoFactorExpires" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactForm_phoneId_key" ON "public"."ContactForm"("phoneId");

-- CreateIndex
CREATE UNIQUE INDEX "PropertySaleRequest_phoneId_key" ON "public"."PropertySaleRequest"("phoneId");

-- CreateIndex
CREATE UNIQUE INDEX "BookingForm_phoneId_key" ON "public"."BookingForm"("phoneId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "public"."accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "public"."sessions"("sessionToken");

-- AddForeignKey
ALTER TABLE "public"."ContactForm" ADD CONSTRAINT "ContactForm_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "public"."PhoneNumber"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PropertySaleRequest" ADD CONSTRAINT "PropertySaleRequest_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "public"."SaleRequestFormPhone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookingForm" ADD CONSTRAINT "BookingForm_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "public"."BookingFormPhone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."properties" ADD CONSTRAINT "properties_adminUserId_fkey" FOREIGN KEY ("adminUserId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."property_images" ADD CONSTRAINT "property_images_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."amenities" ADD CONSTRAINT "amenities_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."not_included_items" ADD CONSTRAINT "not_included_items_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."visitors" ADD CONSTRAINT "visitors_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
