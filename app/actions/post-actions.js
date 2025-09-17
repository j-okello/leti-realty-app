"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import rateLimitService from "../lib/rateLimit";
import { headers } from "next/headers";

const reasonForSelling = z.enum([
  "INVESTMENT_SALE",
  "UPGRADING",
  "RELOCATION",
  "DOWNSIZING",
  "OTHER",
]);

const timeline = z.enum([
  "ONE_TO_THREE_MONTHS",
  "THREE_TO_SIX_MONTHS",
  "SIX_TO_TWELVE_MONTHS",
  "FLEXIBLE",
]);

const propertyType = z.enum([
  "APARTMENT",
  "BUNGALOW",
  "MAISONETTE",
  "STUDIO_APARTMENT",
  "SERVICED_APARTMENT",
  "PENTHOUSE",
  "TOWNHOUSE",
  "VILLA",
  "MANSION",
  "DUPLEX",
  "SINGLE_FAMILY_HOME",
  "MULTI_FAMILY_HOME",
  "OTHER",
]);

const baseSchema = z.object({
  ipAddress: z.string().optional(),
});

const contactSchema = baseSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.object({
    code: z.string().min(1, "Country code is required"),
    phoneCode: z.string().min(1, "Phone code is required"),
    number: z
      .string()
      .min(6, "Phone number too short")
      .refine((val) => /^\d+$/.test(val), {
        message: "Phone number must contain only digits",
      }),
  }),
  message: z.string().min(5, "Message must be at least 10 characters"),
  agreeToPolicy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the policy" }),
  }),
});

const propertySaleRequestSchema = baseSchema.extend({
  fullName: z.string().min(1, "Full name is required").trim(),
  phone: z.object({
    code: z.string().min(1, "Country code is required"),
    phoneCode: z.string().min(1, "Phone code is required"),
    number: z
      .string()
      .min(6, "Phone number too short")
      .refine((val) => /^\d+$/.test(val), {
        message: "Phone number must contain only digits",
      }),
  }),
  email: z.string().email("Invalid email address").trim(),
  propertyAddress: z.string().min(1, "Property address is required").trim(),
  propertyType: propertyType,
  other: z.string().trim().optional(),
  bedrooms: z.preprocess(
    (val) => Number(val),
    z.number().min(0, "Bedrooms must be 0 or more")
  ),
  bathrooms: z.preprocess(
    (val) => Number(val),
    z.number().min(0, "Bathrooms must be 0 or more")
  ),
  squareFootage: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Square footage must be greater than 0")
  ),
  reasonForSelling: reasonForSelling,
  timeline: timeline,
  additionalInfo: z.string().trim().optional(),
  agreeToPolicy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
});

const bookingSchema = baseSchema.extend({
  fullName: z.string().min(3, "Full name is required").trim(),
  email: z.string().email("Invalid email address").trim(),
  property: z.string().optional(),
  phone: z.object({
    code: z.string().min(1, "Country code is required"),
    phoneCode: z.string().min(1, "Phone code is required"),
    number: z
      .string()
      .min(6, "Phone number too short")
      .refine((val) => /^\d+$/.test(val), {
        message: "Phone number must contain only digits",
      }),
  }),
  bookingDate: z.string().refine((val) => {
    // Validate yyyy-mm-dd format (what HTML date input provides)
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(val);
  }, "Please select a valid date"),
  bookingTime: z.string(),
  agreeToPolicy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
});

const emailTemplates = {
  CONTACT_FORM: {
    subject: "New Contact Form Submission",
    template: "contact_form",
  },
  PROPERTY_SALE_REQUEST: {
    subject: "New Property Sale Request",
    template: "property_sale_request",
  },
  PROPERTY_VIEWING_BOOKING_FORM: {
    subject: "New Booking Form",
    template: "property_viewing_booking_form",
  },
};
// Email notification function (placeholder - implement based on your email service)
async function sendFormSubmissionEmail(formType, data) {
  try {
    // Implement your email sending logic here
    // For example, using Nodemailer, SendGrid, etc.
    const templateConfig = emailTemplates[formType];
    console.log(`Sending ${formType} notification email for:`, data.email);

    //  await emailService.send({
    //   to: process.env.ADMIN_EMAIL,
    //   subject: templateConfig.subject,
    //    html: generateEmailHtml(templateConfig.template, data)
    //  });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email notification:", error);
    // Don't throw error - email failure shouldn't fail the form submission
    return { success: false, error: error.message };
  }
}

// Utility function to extract IP from headers
function getClientIp(headersList) {
  try {
    if (!headersList) return "unknown";
    // Check various headers that might contain the IP
    const possibleHeaders = [
      "x-forwarded-for",
      "x-real-ip",
      "x-client-ip",
      "cf-connecting-ip", // Cloudflare
      "fastly-client-ip", // Fastly
      "true-client-ip", // Akamai and Cloudflare
      "x-cluster-client-ip",
    ];

    for (const header of possibleHeaders) {
      const value = headersList.get(header);
      if (value) {
        const ips = value.split(",").map((ip) => ip.trim());
        const clientIp = ips[0];
        if (clientIp && clientIp !== "unknown") {
          return clientIp;
        }
      }
    }

    return "127.0.0.1"; // fallback for local dev
  } catch (error) {
    console.error("Error extracting client IP:", error);
    return "unknown";
  }
}

//Handle form submission
async function handleFormSubmission({
  formData,
  schema,
  createFunction,
  formType,
}) {
  try {
    // Get headers inside the try block for Vercel compatibility
    const headersList = await headers();
    const clientIp = getClientIp(headersList);
    console.log(`Processing ${formType} submission from IP: ${clientIp}`);

    //rateLimiting Check
    const rateLimitCheck = await rateLimitService.checkRateLimit(clientIp);
    console.log("[RATE_LIMIT] Check result:", rateLimitCheck);
    if (!rateLimitCheck.allowed) {
      return {
        success: false,
        errors: `Too many requests. Please try again in ${rateLimitCheck.retryAfter} seconds.`,
        isRateLimit: true,
        retryAfter: rateLimitCheck.retryAfter,
        remainingPoints: rateLimitCheck.remainingPoints,
        limit: rateLimitCheck.limit,
      };
    }
    // Inject ipAddress into the data before validation
    const enrichedData = { ...formData, ipAddress: clientIp };

    // Validate data
    const validatedData = schema.parse(enrichedData);

    // Save to DB
    const result = await createFunction(validatedData);

    return { success: true, message: "Submission successful", data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.reduce((acc, e) => {
          acc[e.path.join(".")] = e.message;
          return acc;
        }, {}),
        isValidationError: true,
      };
    }
    console.error("Form submission failed:", error);
    return { success: false, errors: "Submission failed. Please try again." };
  }
}

// Specific action for contact form
export async function submitContactForm(formData) {
  return handleFormSubmission({
    formData,
    schema: contactSchema,
    createFunction: async (data, clientIp) => {
      const { phone, ...contactData } = data;
      const fullNumber = `${phone.phoneCode}${phone.number}`;

      return await prisma.ContactForm.create({
        data: {
          ...contactData,
          phone: {
            create: {
              code: phone.code,
              phoneCode: phone.phoneCode,
              number: phone.number,
              fullNumber: fullNumber,
            },
          },
          ipAddress: clientIp,
        },
        include: {
          phone: true,
        },
      });
    },
    formType: "Contact Form",
  });
}

// Specific action for Property Sale Request form
export async function submitPropertySaleRequestForm(formData, clientIp) {
  return handleFormSubmission({
    formData,
    schema: propertySaleRequestSchema,
    createFunction: async (data) => {
      const { phone, ...saleData } = data;
      const fullNumber = `${phone.phoneCode}${phone.number}`;

      return await prisma.propertySaleRequest.create({
        data: {
          ...saleData,
          phone: {
            create: {
              code: phone.code,
              phoneCode: phone.phoneCode,
              number: phone.number,
              fullNumber: fullNumber,
            },
          },
          ipAddress: clientIp,
        },
        include: {
          phone: true,
        },
      });
    },
    formType: "Property Sale Request",
  });
}

//Specific Acton for Booking Form
export async function submitBookingForm(formData, clientIp) {
  return handleFormSubmission({
    formData,
    schema: bookingSchema,
    createFunction: async (data) => {
      const { phone, property, ...bookingData } = data;
      console.log(data);
      const fullNumber = `${phone.phoneCode}${phone.number}`;

      return await prisma.BookingForm.create({
        data: {
          ...bookingData,
          property: property,
          phone: {
            create: {
              code: phone.code,
              phoneCode: phone.phoneCode,
              number: phone.number,
              fullNumber: fullNumber,
            },
          },
          ipAddress: clientIp,
        },
        include: {
          phone: true,
        },
      });
    },
    formType: "Book a Viewing Form",
  });
}
// Optional: Add a utility function to check rate limit status
export async function checkRateLimitStatus(ipAddress) {
  try {
    return await rateLimitService.checkRateLimit(ipAddress);
  } catch (error) {
    console.error("Rate limit check failed:", error);
    return { allowed: true, error: error.message };
  }
}

// Optional: Add a function to reset rate limit (for admin purposes)
export async function resetRateLimit(ipAddress) {
  try {
    return await rateLimitService.resetRateLimit(ipAddress);
  } catch (error) {
    console.error("Rate limit reset failed:", error);
    return { success: false, error: error.message };
  }
}
