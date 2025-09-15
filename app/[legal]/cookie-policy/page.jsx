import Breadcrumb from "@/components/shared/Breadcrumb";

const breadcrumbItems = [
  { label: "Legal", href: "/legal" },
  { label: "Cookie-Policy" },
];

function formatDate() {
  const date = new Date("2025-09-12");
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
export default function CookiePolicy() {
  const lastUpdated = Date.now();

  return (
    <div>
      <div className="mt-6 p-3 w-full bg-blue-50">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="max-w-6xl md:text-center text-start mx-auto px-6 py-2 md:py-4 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-light text-blue-900 mb-2">
          Leti Cookie Policy
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Last updated {formatDate(lastUpdated)}
        </p>
      </div>
      <div className="max-w-6xl p-6 md:p-12 mx-auto text-lg text-gray-700  space-x-2">
        <div className="mb-3">
          <p>
            This Cookie Policy explains how{" "}
            <strong>(“we,” “our,” or “us”) </strong>uses cookies and similar
            technologies to recognize you when you visit our platform. It also
            describes what these technologies are, why we use them, and your
            rights to control their use.
          </p>
        </div>
        <div className="mb-3">
          <strong>What Are Cookies?</strong>
          <p>
            Cookies are small text files placed on your device (computer,
            smartphone, or tablet) when you visit a website. They help store
            preferences, track activity, and improve your browsing experience.
            Cookies may be “session cookies” (which expire when you close your
            browser) or “persistent cookies” (which remain stored until
            deleted).
          </p>
        </div>
        <div className="mb-3">
          <strong>Why We Use Cookies</strong>
          <p>We use cookies for several purposes, including:</p>
          <ul role="list" className="list-disc marker:text-sky-400">
            <li>
              <strong>Essential cookies</strong> - To enable core functionality
              such as secure login, form submissions, and property searches.
            </li>
            <li>
              <strong>Performance cookies</strong> - To analyze traffic, track
              page performance, and help us improve our listings and services.
            </li>
            <li>
              <strong>Functional cookies</strong> - To remember your preferences
              (e.g., saved searches, property filters, preferred currency).
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <strong>Third-Party Cookies</strong>
          <p>
            We may also allow trusted third parties, such as Google Analytics,
            to place cookies on your device for analytics only purposes. These
            providers may collect information about your online activity across
            websites and services.
          </p>
        </div>
        <div className="mb-3">
          <strong>Managing Cookies</strong>
          <p>
            You have the right to accept, refuse, or delete cookies. Most
            browsers allow you to manage cookies through their settings. Please
            note that disabling certain cookies may impact the functionality of
            our website, including the ability to save searches or access
            personalized features.
          </p>
        </div>
        <div className="mb-3">
          <strong>Updates to This Policy</strong>
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in technology, law, or our business practices. We encourage
            you to review this page periodically for the latest information.
          </p>
        </div>
        <div className="mb-3">
          <strong>Contact Us</strong>
          <p>
            If you have any questions about this Cookie Policy, please contact
            us at:
          </p>
          <p>info@letirealty.com</p>
        </div>
      </div>
    </div>
  );
}
