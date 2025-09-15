import Breadcrumb from "@/components/shared/Breadcrumb";

const breadcrumbItems = [
  { label: "Legal", href: "/legal" },
  { label: "Terms of Service" },
];

function formatDate() {
  const date = new Date("2025-09-12");
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
export default function TermsOfService() {
  const lastUpdated = Date.now();

  return (
    <div>
      <div className="mt-6 p-3 w-full bg-blue-50">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="max-w-6xl md:text-center text-start mx-auto px-6 py-2 md:py-4 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-light text-blue-900 mb-2">
          Leti Terms Of Service
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Last updated {formatDate(lastUpdated)}
        </p>
      </div>
      <div className="max-w-6xl p-6 md:p-12 mx-auto text-lg text-gray-700 space-x-2">
        <div className="mb-3">
          <p>
            By accessing and using this real estate website{" "}
            <strong>(“we,” “our,” or “us”),</strong> you agree to comply with
            the following Terms of Service. If you do not agree, you should not
            use our website or services.
          </p>
        </div>
        <div className="mb-3">
          <strong>Use of Website</strong>
          <p>
            Our website is intended for individuals seeking information about
            real estate properties, related services, or making inquiries. You
            agree to use the website only for lawful purposes and in a way that
            does not infringe the rights of, or restrict the use of the site by,
            others.
          </p>
        </div>
        <div className="mb-3">
          <strong>Accuracy of Information</strong>
          <p>
            We strive to provide accurate and up-to-date property listings,
            descriptions, and related content. However, we cannot guarantee that
            all information will always be current, complete, or error-free.
            Property availability, prices, and features may change without
            notice.
          </p>
        </div>
        <div className="mb-3">
          <strong>User Responsibilities</strong>
          <p>
            When submitting inquiries, forms, or personal data through this
            website, you agree to provide true, accurate, and current
            information. Misuse of the website—including attempts to disrupt
            functionality, access restricted areas, or misuse data—is strictly
            prohibited.
          </p>
        </div>
        <div className="mb-3">
          <strong>Intellectual Property</strong>
          <p>
            All content, including text, images, logos, and designs on this
            website, is owned by us or licensed to us. You may not copy,
            reproduce, distribute, or otherwise use content without prior
            written consent.
          </p>
        </div>
      </div>
    </div>
  );
}
