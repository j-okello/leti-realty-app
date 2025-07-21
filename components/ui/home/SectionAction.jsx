import React, { useState, useEffect } from "react";
import InputField from "./forms/PropertySale";
import PrivacyPolicySwitch from "../contact/Switch";
import OptionSelect from "./forms/Select";
import validateForm from "./forms/FormValidation";
import NormalizedPhoneNumber from "./forms/NationalPhone";
import EnumMapper from "./forms/NormalEnums";
import { Field } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import buy from "@/public/buy-house.jpg";
import sell from "@/public/sell-house.jpg";
import rent from "@/public/rent-house.jpg";
import { X } from "lucide-react";

const sellingOptions = [
  "Investment Sale",
  "Upgrading",
  "Relocation",
  "Downsizing",
  "Other",
];

const timelineOptions = ["ASAP", "1-3 months", "3-6 months", "Flexible"];
const propertyType = [
  "Apartment",
  "Bungalow",
  "Maisonette",
  "Studio Apartment",
  "Serviced Apartment",
  "Penthouse",
  "Townhouse",
  "Villa",
  "Mansion",
  "Duplex",
  "Single Family Home",
  "Multi-Family Home",
  "other",
];

const calloutItems = [
  {
    id: "buy",
    name: "Buy",
    image: buy,
    title: "Buy a property",
    description:
      "Find your dream home from a curated selection of premium listings tailored to your lifestyle, location, and budget.",
    path: "/sale",
    button: "Find a home",
  },
  {
    id: "sell",
    name: "Sell",
    image: sell,
    title: "Sell a property",
    description:
      "Reach motivated buyers fast with AI-powered marketing and expert listing support.",
    button: "Place an ad",
  },
  {
    id: "rent",
    name: "Rent",
    image: rent,
    title: "Rent a property",
    description:
      "Explore flexible rental options—from modern apartments to spacious homes—all verified and ready for move-in.",
    path: "/rent",
    button: "Find a rental",
  },
];

export default function ActionButtons() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyAddress: "",
    propertyType: "",
    other: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    reasonForSelling: "",
    timeline: "",
    additionalInfo: "",
    agreeToPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateForm(formData);
    setErrors(validationErrors);

    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const submissionData = {
        ...formData,
        propertyType: EnumMapper.mapPropertyType(formData.propertyType),
        reasonForSelling: EnumMapper.mapReasonForSelling(
          formData.reasonForSelling
        ),
        timeline: EnumMapper.mapTimeline(formData.timeline),
        phone: NormalizedPhoneNumber(formData.phone),
        timestamp: new Date().toISOString(),
      };

      // Debug: Log the data being sent
      console.log("Submitting data:", submissionData);

      const response = await fetch("/api/saleform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      // Handle response
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error Response:", errorData);
        console.error("Response Status:", response.status);
        throw new Error(
          errorData.error ||
            `Server error: ${response.status} ${response.statusText}`
        );
      }

      // Success handling
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        propertyAddress: "",
        propertyType: "",
        other: "",
        bedrooms: 0,
        bathrooms: 0,
        squareFootage: 0,
        reasonForSelling: "",
        timeline: "",
        additionalInfo: "",
        agreeToPolicy: false,
      });

      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your request has been submitted successfully. We'll contact you shortly",
      });

      // Close form after 3 seconds
      setTimeout(() => {
        setOpenDialog(false);
        setSubmitStatus({ success: false, message: "" });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);

      let userMessage = "An error occurred. Please try again.";

      if (error.message?.toLowerCase().includes("network")) {
        userMessage = "Network error. Please check your internet connection.";
      } else if (error.message.toLowerCase().includes("email")) {
        userMessage =
          "There was an issue with the email. Please check and try again.";
      }

      setSubmitStatus({
        success: false,
        message: userMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleModal = () => {
    setOpenDialog(!openDialog);
    setSubmitStatus({ success: false, message: "" }); // Reset status when modal is toggled
  };

  const handleDialogClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenDialog(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && openDialog) {
        setOpenDialog(false);
      }
    };

    if (openDialog) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openDialog]);

  return (
    <section id="cta">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl lg:text-4xl font-light text-blue-900 mb-8">
              Your Next Move Starts Here
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
              {calloutItems.map((item, index) => (
                <div
                  key={item.id || index}
                  className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      alt={item.name}
                      src={item.image}
                      className="w-full rounded-lg bg-white object-cover group-hover:opacity-90 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                          {item.name}
                        </h3>
                        <p
                          className={`text-sm opacity-90 mb-4 transition-all duration-300 ${
                            hoveredCard === index
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`}
                        >
                          {item.description}
                        </p>
                        {item.id === "sell" ? (
                          <button
                            className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform ${
                              hoveredCard === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenDialog(true);
                            }}
                          >
                            {item.button}
                          </button>
                        ) : (
                          <Link
                            href={item.path}
                            className={`inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform ${
                              hoveredCard === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                          >
                            {item.button}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog Property Sale Form */}
      {openDialog && (
        <div
          onClick={handleDialogClick}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-between items-center border-b p-4 bg-blue-900">
              <h2 className="text-xl font-bold text-white">PSRF</h2>
              <h2 className="text-xl font-bold text-white">
                Property Sale Request Form
              </h2>
              <button
                onClick={toggleModal}
                className="text-blue-200 hover:text-white text-2xl cursor-pointer"
              >
                <X />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                    Owner Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <InputField
                        title="fullName"
                        label="Full Name"
                        type="text"
                        required={true}
                        value={formData.fullName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        errors={errors}
                      />
                    </div>
                    <div>
                      <InputField
                        title="phone"
                        label="Phone"
                        type="text"
                        required={true}
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        errors={errors}
                      />
                    </div>
                  </div>
                  <div>
                    <InputField
                      title="email"
                      label="Email"
                      type="email"
                      required={true}
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      errors={errors}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                    Property Details
                  </h3>
                  <div>
                    <OptionSelect
                      title="propertyType"
                      label="Property Type"
                      value={formData.propertyType}
                      placeholder="Select an option"
                      listitems={propertyType}
                      onChange={handleSelectChange}
                      errors={errors}
                      required={true}
                      disabled={isSubmitting}
                    />
                  </div>
                  {formData.propertyType === "other" && (
                    <div>
                      <InputField
                        title="other"
                        label="Specify other"
                        type="text"
                        required={true}
                        value={formData.other}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        errors={errors}
                      />
                    </div>
                  )}
                  <div>
                    <InputField
                      title="propertyAddress"
                      label="Property Address"
                      type="text"
                      required={true}
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      errors={errors}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <InputField
                        title="bedrooms"
                        label="Bedrooms"
                        type="number"
                        required={true}
                        value={formData.bedrooms}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        errors={errors}
                      />
                    </div>
                    <div>
                      <InputField
                        title="bathrooms"
                        label="Bathrooms"
                        type="number"
                        required={true}
                        value={formData.bathrooms}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        errors={errors}
                      />
                    </div>
                    <div>
                      <InputField
                        title="squareFootage"
                        label="Sq. Ft."
                        type="number"
                        required={true}
                        value={formData.squareFootage}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        errors={errors}
                      />
                    </div>
                  </div>
                  <div>
                    <OptionSelect
                      title="reasonForSelling"
                      label="Reason for selling"
                      value={formData.reasonForSelling}
                      placeholder="Select an option"
                      listitems={sellingOptions}
                      onChange={handleSelectChange}
                      errors={errors}
                      required={true}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                    Additional Information
                  </h3>
                  <div>
                    <OptionSelect
                      label="Desired timeline"
                      title="timeline"
                      value={formData.timeline}
                      placeholder="Select an option"
                      listitems={timelineOptions}
                      onChange={handleSelectChange}
                      errors={errors}
                      required={true}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <InputField
                      title="additionalInfo"
                      label="Additional Information"
                      type="text"
                      multiline={true}
                      rows={4}
                      required={false}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      errors={errors}
                    />
                  </div>
                </div>
                {submitStatus.message && (
                  <div
                    className={`p-4 mb-4 rounded ${
                      submitStatus.success
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <Field className="flex gap-x-4 sm:col-span-2">
                  <PrivacyPolicySwitch
                    checked={formData.agreeToPolicy}
                    onChange={(checked) =>
                      setFormData({ ...formData, agreeToPolicy: checked })
                    }
                    errors={errors}
                    link="/privacy-policy"
                    disabled={isSubmitting}
                  />
                </Field>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      isSubmitting
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
/*
const kenyaPropertyTypes = [
  // Residential Properties
  "Apartment",
  "Bungalow",
  "Maisonette",
  "Studio Apartment",
  "Serviced Apartment",
  "Penthouse",
  "Townhouse",
  "Villa",
  "Mansion",
  "Duplex",
  "Single Family Home",
  "Multi-Family Home",
  
  // Commercial Properties
  "Office Space",
  "Retail Space",
  "Shop",
  "Kiosk",
  "Go-Down (Warehouse)",
  "Commercial Complex",
  "Shopping Mall",
  "Mixed-Use Building",
  "Hotel",
  "Guest House",
  "Serviced Offices",
  "Business Park",
  
  // Land Types
  "Agricultural Land",
  "Residential Plot",
  "Commercial Plot",
  "Industrial Land",
  "Beach Plot",
  "Ranch",
  "Coffee Farm",
  "Tea Farm",
  "Mixed-Use Plot",
  "Greenfield Land",
  
  // Special Purpose Properties
  "Student Hostel",
  "Boarding House",
  "Gated Community Home",
  "Eco-Friendly Home",
  "Luxury Home",
  "Penthouse",
  "Beach House",
  "Mountain Cabin",
  "Game Lodge",
  "Safari Camp",
  
  // Industrial Properties
  "Factory",
  "Manufacturing Plant",
  "Storage Warehouse",
  "Cold Storage Facility",
  "Industrial Park",
  "Light Industrial Unit",
  
  // Unique Kenyan Property Types
  "Shamba House (Farm House)",
  "Manyatta (Traditional House)",
  "Swahili House",
  "Coastal Villa",
  "Runda-Style Home",
  "Karen-Style Home",
  "Kileleshwa Apartment",
  "Westlands Office Space",
  "Airbnb Property",
  "Short-Term Rental"
];
*/
