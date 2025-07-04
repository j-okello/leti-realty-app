import { useState } from "react";
const questions = [
  {
    question: "Can foreigners buy property in Kenya?",
    answer:
      "Yes, foreigners can buy property in Kenya, but only on a leasehold basis (typically 99 years). Freehold ownership is reserved for Kenyan citizens.",
  },
  {
    question: "What types of property ownership exist in Kenya?",
    answer:
      "There are two main types: Freehold: Full ownership of land and property (only available to Kenyan citizens); Leasehold: Right to use land for a fixed period (typically 99 or 50 years), renewable.",
  },
  {
    question: "What are the typical costs when buying property in Kenya?",
    answer:
      "Typical costs include: Stamp duty (4% of property value for urban areas, 2% for rural); Legal fees (1-2% of property value); Valuation fees; Registration fees; Agency fees (if using a real estate agent).",
  },
  {
    question: "What documents are required to buy land or a house in Kenya?",
    answer:
      "Key documents include: Title deed or leasehold certificate; Land search certificate (from the Ministry of Lands); Sale agreement; National ID or passport; KRA PIN (Kenya Revenue Authority Personal Identification Number).",
  },
  {
    question: "What is the process of renting property in Kenya?",
    answer:
      "The rental process typically involves: Finding a property; Paying a reservation fee (if applicable); Signing a tenancy agreement; Paying a deposit (usually 1-2 months' rent) and first month's rent; Conducting a property inspection.",
  },
  {
    question: "Are there property taxes in Kenya?",
    answer:
      "Yes, property taxes in Kenya include: Stamp duty on property transfers; Capital gains tax (5% of gain); Annual land rates (paid to county governments); Rental income tax (10% for individuals).",
  },
  {
    question: "How do I transfer land in Kenya?",
    answer:
      "The land transfer process involves: Conducting a land search; Preparing and signing sale agreement; Paying stamp duty; Preparing transfer documents; Submitting documents to lands registry for registration.",
  },
  {
    question: "Can I build on my land immediately after purchase?",
    answer:
      "You can build after completing the purchase process, but you may need: Approved building plans from county government; NEMA approval (for environmental impact); Necessary permits from relevant authorities.",
  },
  {
    question: "Is property a good investment in Kenya?",
    answer:
      "Property in Kenya can be a good investment due to: Steady appreciation in value; Rental income potential; Hedge against inflation; Tangible asset. However, thorough due diligence is essential to avoid fraud or disputes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 mb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-light text-blue-900 text-center mb-12">
          Frequently asked questions
        </h1>

        <div className="space-y-2">
          {questions.map((item, index) => (
            <div key={index} className="border-b-1 overflow-hidden">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium text-pretty  text-left ${
                  openIndex === index
                    ? "text-red-600"
                    : "text-blue-900 hover:bg-blue-50"
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg">{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-content-${index}`}
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 ">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
