import Link from "next/link";
import PricingTabs from "../components/PricingTabs";

export default function PricingTabsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Challenges
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Pricing Tabs
          </h1>
          <p className="text-lg text-gray-600">
            A tab component with nested tabs for pricing options
          </p>
        </header>

        <div className="max-w-md mx-auto mb-16">
          <PricingTabs />
        </div>
      </div>
    </div>
  );
}
