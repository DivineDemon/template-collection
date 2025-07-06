import MaxWidthWrapper from "../max-width-wrapper";

const Footer = () => {
  return (
    <footer className="border-gray-750 relative w-full border-t bg-gray-100 py-16 dark:bg-black">
      <MaxWidthWrapper>
        <div className="grid w-full grid-cols-6">
          <div className="flex h-full w-full items-start justify-start">
            <span className="w-full text-left text-xl font-semibold">
              Emailify.
            </span>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-start text-sm font-medium">
            <span className="mb-2.5 w-full text-left">Features</span>
            {[
              "Plan",
              "Build",
              "Insights",
              "Customer Requests",
              "Emailify Asks",
              "Security",
              "Mobile",
            ].map((item, idx) => (
              <span
                key={idx}
                className="mt-2.5 w-full text-left font-light opacity-45 transition-all duration-200 hover:opacity-100"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex h-full w-full flex-col items-start justify-start text-sm font-medium">
            <span className="mb-2.5 w-full text-left">Product</span>
            {[
              "Pricing",
              "Method",
              "Integrations",
              "Changelog",
              "Documentation",
              "Download",
              "Switch",
            ].map((item, idx) => (
              <span
                key={idx}
                className="mt-2.5 w-full text-left font-light opacity-45 transition-all duration-200 hover:opacity-100"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex h-full w-full flex-col items-start justify-start text-sm font-medium">
            <span className="mb-2.5 w-full text-left">Company</span>
            {[
              "About",
              "Customers",
              "Careers",
              "Blog",
              "README",
              "Quality",
              "Brand",
            ].map((item, idx) => (
              <span
                key={idx}
                className="mt-2.5 w-full text-left font-light opacity-45 transition-all duration-200 hover:opacity-100"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex h-full w-full flex-col items-start justify-start text-sm font-medium">
            <span className="mb-2.5 w-full text-left">Resources</span>
            {[
              "API",
              "Status",
              "Startups",
              "Report issue",
              "DPA",
              "Privacy",
              "Terms",
            ].map((item, idx) => (
              <span
                key={idx}
                className="mt-2.5 w-full text-left font-light opacity-45 transition-all duration-200 hover:opacity-100"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex h-full w-full flex-col items-start justify-start text-sm font-medium">
            <span className="mb-2.5 w-full text-left">Connect</span>
            {[
              "Contact us",
              "Community",
              "X (Twitter)",
              "GitHub",
              "YouTube",
            ].map((item, idx) => (
              <span
                key={idx}
                className="mt-2.5 w-full text-left font-light opacity-45 transition-all duration-200 hover:opacity-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
