import Breadcrumb from "@/components/shared/Breadcrumb";

const breadcrumbItems = [
  { label: "Legal", href: "/legal" },
  { label: "Disclaimer" },
];

function formatDate() {
  const date = new Date("2025-09-12");
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
export default function Disclaimer() {
  const lastUpdated = Date.now();

  return (
    <div>
      <div className="mt-6 p-3 w-full bg-blue-50">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="max-w-6xl md:text-center text-start mx-auto px-6 py-2 md:py-4 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-light text-blue-900 mb-2">
          Leti Disclaimer
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Last updated {formatDate(lastUpdated)}
        </p>
      </div>
      <div className="max-w-6xl p-6 md:p-12 mx-auto text-lg text-gray-700 space-x-2">
        <div className="mb-3">
          <p>
            The information provided on this website is for{" "}
            <strong>general informational purposes only.</strong> While we
            strive to keep property listings and details accurate and
            up-to-date, we make no warranties or{" "}
            <strong>representations</strong> of any kind, express or implied,
            about the completeness, reliability, suitability, or availability of
            the content.
          </p>
        </div>
        <div className="mb-3">
          <ul role="list" className="list-disc marker:text-sky-400">
            <li>
              Property descriptions, availability, and pricing are subject to
              change at any time without notice.
            </li>
            <li>
              Nothing on this website constitutes financial, investment, or
              legal advice. Users should conduct independent due diligence and,
              where appropriate, consult qualified professionals before making
              property-related decisions.
            </li>
            <li>
              We are not responsible for any losses or damages, including loss
              of profits, arising from reliance on the information presented on
              this website.
            </li>
            <li>
              Links to third-party websites are provided for convenience only;
              we do not endorse or take responsibility for the content or
              practices of external sites.
            </li>
          </ul>
          <p>
            By using this website, you acknowledge and agree to this disclaimer
            in full.
          </p>
        </div>
      </div>
    </div>
  );
}
