export default function ErrorCart({
  title = "Something went wrong",
  message = "We couldn't load your cart. Please try again.",
  onRetry,
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex max-w-sm flex-col items-center rounded-2xl border border-red-200 bg-white p-8 text-center shadow">
        
        {/* Error Icon */}
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v4m0 4h.01M10.29 3.86l-8.02 14A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.23-2.14l-8.02-14a1.5 1.5 0 00-2.46 0z"
            />
          </svg>
        </div>

        {/* Text */}
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          {message}
        </p>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={onRetry}
            className="rounded-xl bg-red-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-600"
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.reload()}
            className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}
