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
    const { firstName, lastName, email, phone, message, agreeToPolicy } = body;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone?.number ||
      !message ||
      agreeToPolicy === undefined
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
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
      phoneNumber = phoneUtil.parse(phone.number, phone.code);
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

    // Create contact with nested phone number
    const contact = await prisma.contactForm.create({
      data: {
        firstName,
        lastName,
        email,
        message,
        agreeToPolicy,
        phone: {
          create: {
            code: phone.code,
            phoneCode: phone.phoneCode,
            number: phone.number,
            fullNumber: phoneUtil.format(phoneNumber, PhoneNumberFormat.E164),
          },
        },
      },
      include: {
        phone: true,
      },
    });

    return NextResponse.json(
      {
        message: "Contact saved successfully",
        contact: {
          id: contact.id,
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          phone: contact.phone,
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

    const [contacts, total] = await Promise.all([
      prisma.contactForm.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          phone: true,
        },
      }),
      prisma.contactForm.count(),
    ]);

    return NextResponse.json({
      contacts: contacts.map((contact) => ({
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        message: contact.message,
        phone: contact.phone,
        createdAt: contact.createdAt,
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
