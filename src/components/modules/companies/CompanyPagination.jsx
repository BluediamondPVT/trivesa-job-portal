// src/components/modules/companies/CompanyPagination.jsx
import { Loader2 } from "lucide-react";

export default function CompanyPagination({
  currentLength,
  totalLength,
  isLoading,
  onLoadMore,
}) {
  if (currentLength === 0) return null;

  return (
    <div className="flex flex-col items-center justify-center mt-6 mb-16 space-y-5">
      <p className="text-sm text-gray-500 font-medium">
        You&apos;ve viewed {currentLength} of {totalLength} companies
      </p>

      {/* Progress Bar */}
      <div className="w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(currentLength / totalLength) * 100}%` }}
        ></div>
      </div>

      {/* Load More Button */}
      {currentLength < totalLength && (
        <button
          onClick={onLoadMore}
          disabled={isLoading}
          className="mt-4 px-8 py-3 bg-white border border-gray-200 text-blue-600 font-bold text-sm rounded-xl hover:border-blue-300 hover:shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-45"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
          ) : (
            "Load More Companies"
          )}
        </button>
      )}
    </div>
  );
}
