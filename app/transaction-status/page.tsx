import StatusIndicator from "../components/StatusIndicator";

export default function TransactionStatusPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-8">Transaction Status Indicator</h1>
      <div className="mb-8">
        <StatusIndicator />
      </div>
      <p className="text-gray-500 text-center max-w-md">
        This component cycles through different transaction statuses with smooth
        animations. The status changes every 3 seconds.
      </p>
    </div>
  );
}
