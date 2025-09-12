/* import { checkRateLimit } from "@/app/lib/rateLimit";
import { NextResponse } from "next/server";

function getClientIp(req) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    req.ip ||
    null
  );
}

export async function POST(req) {
  try {
    // Get client IP address
    const clientIp = getClientIp(req);
    console.log("Client IP:", clientIp);

    // Check rate limit if IP is available
    if (clientIp) {
      const rateLimitResult = await checkRateLimit(clientIp);
      if (!rateLimitResult.allowed) {
        const retryMinutes = Math.ceil(rateLimitResult.retryAfter / 60);
        return NextResponse.json(
          {
            message: `Too many submissions. Please try again in ${retryMinutes} minute${retryMinutes !== 1 ? "s" : ""}.`,
            error: "RATE_LIMIT_EXCEEDED",
            retryAfter: rateLimitResult.retryAfter,
          },
          {
            status: 429,
            headers: {
              "Retry-After": String(rateLimitResult.retryAfter),
            },
          }
        );
      }
    }

    const body = await req.json();

    // Destructure form data according to your structure
    const {
      fullName,
      phone = {},
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

    // Validate required fields
    const requiredFields = {
      fullName,
      email,
      phoneNumber: phone?.number,
      phoneCode: phone?.phoneCode,
      propertyAddress,
      propertyType,
      bedrooms,
      bathrooms,
      squareFootage,
      reasonForSelling,
      timeline,
      agreeToPolicy,
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([key, value]) => {
        if (key === "agreeToPolicy") return value !== true;
        return value === undefined || value === null || value === "";
      })
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          message: `Missing required fields: ${missingFields.join(", ")}`,
          error: "VALIDATION_ERROR",
          missingFields,
        },
        { status: 400 }
      );
    }

    // Process the submission
    console.log("Processing property sale request:", {
      fullName,
      email,
      phone,
      propertyAddress,
      propertyType: propertyType === "other" ? other : propertyType,
      bedrooms: Number(bedrooms),
      bathrooms: Number(bathrooms),
      squareFootage: Number(squareFootage),
      reasonForSelling,
      timeline,
      additionalInfo,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Property sale request submitted successfully!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      {
        message: "Internal server error. Please try again later.",
        error: "SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}
 */
