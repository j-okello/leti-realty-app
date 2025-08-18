"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { PhoneNumberUtil } from "google-libphonenumber";
import { checkRateLimit } from "@/app/lib/rateLimit";
import { sendFormSubmissionEmail } from "@/app/lib/email";

const phoneUtil = PhoneNumberUtil.getInstance();

const reasonForSelling = z.enum([
  "INVESTMENT_SALE",
  "UPGRADING",
  "RELOCATION",
  "DOWNSIZING",
  "OTHER",
]);

const timeline = z.enum([
  "ASAP",
  "ONE_TO_THREE_MONTHS",
  "THREE_TO_SIX_MONTHS",
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
const contactSchema = z.object({
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
  message: z.string().min(10, "Message must be at least 10 characters"),
  agreeToPolicy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the policy" }),
  }),
  ipAddress: z.string().optional(),
});

const propertySaleRequestSchema = z.object({
  fullName: z.string().trim(),
  phone: z
    .string()
    .trim()
    .refine((val) => /^\d+$/.test(val), {
      message: "Phone number must contain digits only",
    })
    .refine(
      (val, ctx) => {
        const { code } = ctx.parent;
        try {
          const parsed = phoneUtil.parse(val, code);
          return phoneUtil.isValidNumber(parsed);
        } catch {
          return false;
        }
      },
      {
        message: "Invalid phone number format for selected country",
      }
    ),

  email: z.string().email().trim(),
  propertyAddress: z.string().trim(),
  propertyType: propertyType,
  other: z.string().trim(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  squareFootage: z.number(),
  reasonForSelling: reasonForSelling,
  timeline: timeline,
  additionalInfo: z.string().trim(),
  agreeToPolicy: z.literal(true),
});

async function handleFormSubmission({
  formData,
  schema,
  createFunction,
  formType,
  ipAddress,
}) {
  // Rate limiting check
  /*const rateLimit = await checkRateLimit(ipAddress);
  if (!rateLimit.allowed) {
    return {
      success: false,
      message: `Too many submissions. Try again in ${rateLimit.retryAfter} seconds`,
    };
  }*/
  const rawData = formData;

  try {
    const validatedData = schema.parse(rawData);
    const result = await createFunction(validatedData);
    // Send email notification
    await sendFormSubmissionEmail(formType, validatedData);
    return { success: true, message: "Submission successful", data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.errors.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        })),
      };
    }
    console.error("submission error", error);
    return { success: false, message: "Submission failed" };
  }
}

//specific action for contact form
export async function submitContactForm(formData) {
  return handleFormSubmission({
    formData,
    schema: contactSchema,
    createFunction: async (data) => {
      try {
        const { phone, ...contactData } = data;

        // Generate fullNumber if not provided
        const fullNumber =
          phone.fullNumber || `${phone.phoneCode}${phone.number}`;

        return await prisma.contactForm.create({
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
          },
          include: {
            phone: true,
          },
        });
      } catch (error) {
        console.error("Detailed contact form error:", {
          error: error.message,
          meta: error.meta, // Prisma-specific error details
          stack: error.stack,
        });

        // Handle unique constraint violation (email)
        if (error.code === "P2002") {
          throw new Error("This email is already registered");
        }

        throw error;
      }
    },
    formType: "Contact Form",
    // ipAddress: formData.ipAddress || formData.get?.("ipAddress"),
  });
}

//specific action for Property Sale Request form
export async function submitPropertySaleRequestForm(formData) {
  console.log("submitPropertySaleRequestForm called with:", formData);

  return handleFormSubmission({
    formData,
    schema: propertySaleRequestSchema,
    createFunction: async (data) => {
      const { dbData } = data;
      return prisma.PropertySaleRequest.create({ data: dbData });
    },
    formType: "Property Sales Request",
    ipAddress: formData.ipAddress || formData.get?.("ipAddress"),
  });
}
