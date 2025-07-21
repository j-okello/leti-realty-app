import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

export async function POST(request) {
  try {
    // Validate content type
    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 }
      );
    }

    const body = await request.json();
    console.log("Received data:", body); // Debug log

    const {
      fullName,
      phone,
      email,
      propertyAddress,
      propertyType,
      other,
      bedrooms,
      bathrooms,
      squareFootage,
      reasonForSelling,
      timeline,
      additionalInfo,
      agreeToPolicy,
    } = body;

    // Debug log to check individual fields
    console.log("Field values:", {
      fullName: !!fullName,
      phone: !!phone,
      email: !!email,
      propertyAddress: !!propertyAddress,
      propertyType: !!propertyType,
      other: !!other,
      bedrooms: !!bedrooms,
      bathrooms: !!bathrooms,
      squareFootage: !!squareFootage,
      reasonForSelling: !!reasonForSelling,
      timeline: !!timeline,
      additionalInfo: !!additionalInfo,
      agreeToPolicy: agreeToPolicy,
    });

    // Validate required fields (check for both existence and non-empty values)
    const requiredFields = [
      { field: fullName, name: "fullName" },
      { field: email, name: "email" },
      { field: phone, name: "phone" },
      { field: propertyAddress, name: "propertyAddress" },
      { field: propertyType, name: "propertyType" },
      { field: bedrooms, name: "bedrooms" },
      { field: bathrooms, name: "bathrooms" },
      { field: squareFootage, name: "squareFootage" },
      { field: reasonForSelling, name: "reasonForSelling" },
      { field: timeline, name: "timeline" },
      { field: additionalInfo, name: "additionalInfo" },
    ];

    const missingFields = requiredFields
      .filter(({ field }) => !field || field.toString().trim() === "")
      .map(({ name }) => name);

    if (missingFields.length > 0 || agreeToPolicy === undefined) {
      console.log("Missing fields:", missingFields);
      console.log("agreeToPolicy:", agreeToPolicy);
      return NextResponse.json(
        {
          error: `Missing required fields: ${missingFields.join(", ")}${agreeToPolicy === undefined ? ", agreeToPolicy" : ""}`,
        },
        { status: 400 }
      );
    }

    // Validate "other" field only when propertyType is "other"
    if (propertyType === "other" && !other) {
      return NextResponse.json(
        { error: "Please specify the property type" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Format and validate phone number
    const phoneUtil = PhoneNumberUtil.getInstance();
    let phoneNumber;
    try {
      phoneNumber = phoneUtil.parse(phone, "KE");
      if (!phoneUtil.isValidNumber(phoneNumber)) {
        return NextResponse.json(
          { error: "Invalid phone number" },
          { status: 400 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Format phone number for storage
    const formattedPhone = phoneUtil.format(
      phoneNumber,
      PhoneNumberFormat.E164
    );

    // Create property sale request form data
    const saleRequest = await prisma.PropertySaleRequest.create({
      data: {
        fullName,
        phone: formattedPhone,
        email,
        propertyAddress,
        propertyType,
        other,
        bedrooms: parseInt(bedrooms),
        bathrooms: parseInt(bathrooms),
        squareFootage: parseInt(squareFootage),
        reasonForSelling,
        timeline,
        additionalInfo,
        agreeToPolicy,
      },
    });

    return NextResponse.json(
      {
        message: "Property sale request saved successfully",
        saleRequest: {
          id: saleRequest.id,
          fullName: saleRequest.fullName,
          email: saleRequest.email,
          phone: saleRequest.phone,
          propertyAddress: saleRequest.propertyAddress,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database error:", error);

    // Handle unique constraint violation (duplicate email)
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "This email is already registered" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        error: "Internal server error",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const [saleRequests, total] = await Promise.all([
      prisma.PropertySaleRequest.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.PropertySaleRequest.count(),
    ]);

    return NextResponse.json({
      saleRequests: saleRequests.map((request) => ({
        id: request.id,
        fullName: request.fullName,
        email: request.email,
        phone: request.phone,
        propertyAddress: request.propertyAddress,
        propertyType: request.propertyType,
        createdAt: request.createdAt,
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
